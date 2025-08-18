import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const BASE_WIDTH = 375;
const BASE_HEIGHT = 812;

export const scaledWidth = (size: number) => (width / BASE_WIDTH) * size;
export const scaledHeight = (size: number) => (height / BASE_HEIGHT) * size;
