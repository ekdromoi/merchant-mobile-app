import { StyleSheet, Text, View } from "react-native";
import { createThirdwebClient } from "thirdweb";
import {
  ConnectButton,
  ThirdwebProvider,
  useActiveAccount,
} from "thirdweb/react";

export const client = createThirdwebClient({
  clientId: "cb8fb1375fdaa9a676723a36c1c3f530",
});

const Component = () => {
  const account = useActiveAccount();
  console.log("connected to", account?.address);
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
      <ConnectButton client={client} />
    </View>
  );
};

export default function HomeScreen() {
  return (
    <ThirdwebProvider>
      <Component />
    </ThirdwebProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
