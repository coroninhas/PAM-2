import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    marginBottom: 16,
    backgroundColor: "#ffffff",
    borderRadius: 16,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 4,
  },
  image: {
    width: "100%",
    height: 180,
  },
  name: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111827",
    marginTop: 12,
    marginHorizontal: 12,
  },
  role: {
    fontSize: 14,
    color: "#6b7280",
    marginBottom: 12,
    marginHorizontal: 12,
  },
});