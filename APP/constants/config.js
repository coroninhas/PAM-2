import { Platform } from "react-native";

const host = Platform.OS === "web" ? window.location.hostname : "10.0.2.2";
export const API_URL = `http://${host}:3000`;