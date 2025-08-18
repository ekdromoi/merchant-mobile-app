import { StyleSheet, Text, View } from "react-native";
import { createThirdwebClient, defineChain } from "thirdweb";
import { baseSepolia } from "thirdweb/chains";
import { ConnectButton, useActiveAccount } from "thirdweb/react";
import { NewOrders } from "../components/new-orders";
import { COLORS } from "../design";

export const chain = defineChain({
  id: baseSepolia.id,
  rpc: "https://base-sepolia.g.alchemy.com/v2/AVM_ThmMO90yTx8Bo4bihltiwWuvwisa",
  nativeCurrency: baseSepolia.nativeCurrency,
  testnet: baseSepolia?.testnet,
  blockExplorers: baseSepolia.blockExplorers,
});

export const client = createThirdwebClient({
  clientId: "cb8fb1375fdaa9a676723a36c1c3f530",
});

const walletConfig = {
  chain,
  client,
  accountAbstraction: {
    sponsorGas: true,
    chain,
    factoryAddress: "0xde320c2e2b4953883f61774c006f9057a55b97d1",
  },
};

const HomeScreen = () => {
  const activeAccount = useActiveAccount();

  console.log(activeAccount?.address);

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <ConnectButton
        client={walletConfig.client}
        chain={walletConfig.chain}
        accountAbstraction={walletConfig.accountAbstraction}
      />
      <Text>{activeAccount?.address}</Text>
      <NewOrders />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    position: "relative",
  },
});

export default HomeScreen;
