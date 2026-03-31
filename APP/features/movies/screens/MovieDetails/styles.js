import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#f2f5fc",
    flexGrow: 1,
  },
  header: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1f2937",
    marginBottom: 16,
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
  label: {
    fontSize: 14,
    color: "#6b7280",
    marginTop: 12,
    marginBottom: 6,
  },
  value: {
    fontSize: 16,
    color: "#111827",
    lineHeight: 22,
  },
  description: {
    fontSize: 15,
    color: "#374151",
    marginTop: 8,
    lineHeight: 22,
  },
});