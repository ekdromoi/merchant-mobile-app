import { ABI } from "@/app/abi";
import { ICONS } from "@/app/assets";
import { viemWebsocketClient } from "@/app/client";
import { useEffect } from "react";
import { Button, Image, Pressable, StyleSheet, Text, View } from "react-native";
import { COLORS, scaledHeight, scaledWidth, TEXT_STYLES } from "../../design";

const OrderCard = () => {
  useEffect(() => {
    console.log("watching");
    viemWebsocketClient.watchContractEvent({
      address: "0xafC71a902774eE23Dbf53b0c180f8a48D1b120E7",
      abi: ABI.OrderFlowFacet,
      eventName: "MerchantAssignedNewOrder",
      onLogs: (logs) => {
        console.log("logs", logs);
      },
    });
  }, []);
  return (
    <View style={styles.order_card_container}>
      <View style={styles.order_card_header}>
        <Image source={ICONS.TXN_RECEIVED} style={styles.order_card_icon} />
        <View style={styles.order_card_header_container}>
          <View style={styles.order_card_header_content}>
            <View>
              <Text>Receive</Text>
              <Text>ID: 202</Text>
            </View>
            <View>
              <Text>XXXX INR</Text>
              <Text>3 mins ago</Text>
            </View>
          </View>
          <Button title="Accept" color={COLORS.primary} />
        </View>
      </View>
    </View>
  );
};

const NewOrders = () => {
  const handleViewAll = () => {
    console.log("View All");
  };
  return (
    <View style={styles.container}>
      <View style={styles.header_container}>
        <View style={styles.heading_container}>
          <Text style={styles.heading}>New Orders</Text>
          <View style={styles.order_count_container}>
            <Text style={styles.order_count}>1</Text>
          </View>
        </View>
        <Pressable onPress={handleViewAll}>
          <Text style={styles.view_all_button_text}>View All</Text>
        </Pressable>
      </View>
      <OrderCard />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: COLORS.black,
    borderTopWidth: 0.5,
    backgroundColor: COLORS.white,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    borderTopLeftRadius: scaledWidth(32),
    borderTopRightRadius: scaledWidth(32),
    paddingBottom: scaledHeight(10),
  },
  heading_container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: scaledWidth(10),
  },
  heading: {
    ...TEXT_STYLES.heading_2,
    color: COLORS.black,
  },
  order_count: {
    color: COLORS.white,
    fontWeight: "bold",
  },
  order_count_container: {
    backgroundColor: COLORS.red,
    height: scaledHeight(24),
    width: scaledWidth(24),
    borderRadius: scaledWidth(100),
    justifyContent: "center",
    alignItems: "center",
  },
  view_all_button_text: {
    color: COLORS.primary,
    ...TEXT_STYLES.sm_button,
  },
  header_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: scaledWidth(24),
  },
  order_card_icon: {
    width: scaledWidth(36),
    height: scaledHeight(36),
    resizeMode: "contain",
  },
  order_card_header: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: scaledWidth(10),
  },
  order_card_container: {
    borderWidth: 1,
    borderColor: COLORS.black,
    borderBottomWidth: 0.5,
    borderRadius: scaledWidth(16),
    marginHorizontal: scaledWidth(24),
    padding: scaledWidth(16),
  },
  order_card_header_content: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: scaledHeight(10),
  },
  order_card_header_container: {
    flex: 1,
  },
});

export default NewOrders;
