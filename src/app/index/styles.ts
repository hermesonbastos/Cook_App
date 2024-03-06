import { StyleSheet } from "react-native";
import { theme } from "@/theme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    flex: 1
  },
  title: {
    fontSize: theme.fonts.size.heading.xl,
  },
  subtitle: {
    fontFamily: theme.fonts.family.bold,
  }
})