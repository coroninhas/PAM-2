import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f2f5fc",
  },
  header: {
    fontSize: 26,
    fontWeight: "700",
    color: "#1f2937",
    marginBottom: 18,
  },
  list: {
    flex: 1,
  },
  listContent: {
    paddingBottom: 24,
  },
  columnWrapper: {
    justifyContent: "space-between",
    marginBottom: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#f2f5fc",
  },
  loadingText: {
    fontSize: 16,
    color: "#374151",
  },
  emptyText: {
    fontSize: 16,
    color: "#6b7280",
    textAlign: "center",
    marginTop: 24,
  },
});
