import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: "#f2f5fc",
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
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 5 },
    elevation: 4,
  },
  label: {
    fontSize: 14,
    color: "#6b7280",
    marginTop: 16,
    marginBottom: 8,
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: 12,
    paddingHorizontal: 14,
    backgroundColor: "#f8fafc",
    color: "#111827",
  },
  button: {
    marginTop: 24,
    backgroundColor: "#2563eb",
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "700",
  },
  hint: {
    fontSize: 13,
    color: "#6b7280",
    marginTop: 14,
    lineHeight: 20,
  },
});
