import { createPublicClient, webSocket } from "viem";
import { baseSepolia } from "viem/chains";

// TODO: Add the correct chain id
export const viemWebsocketClient = createPublicClient({
  chain: baseSepolia,
  transport: webSocket(
    "wss://base-sepolia.g.alchemy.com/v2/GM1D0YB6HISE9ghMhmkg5CCGoA6N-ukh"
  ),
});
