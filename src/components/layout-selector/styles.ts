import { StyleSheet } from "react-native";
import colors from "../../utils/constants/colors";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 200,
    position: "relative",
  },
  preview: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: colors.primary,
    borderWidth: 2,
    backgroundColor: colors.white,
    padding: 5,
  },
  containerTouchable: {
    padding: 7,
    borderRadius: 5,
    position: "absolute",
    bottom: 10,
    right: 10,
    backgroundColor: colors.primary,
  },
  containerTouchableAdditional: {
    padding: 7,
    borderRadius: 5,
    position: "absolute",
    bottom: 52,
    right: 10,
    backgroundColor: colors.primary,
  },
});
