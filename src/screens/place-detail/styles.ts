import { StyleSheet } from "react-native";
import colors from "../../utils/constants/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  image: {
    height: "40%",
    minHeight: 300,
    width: "100%",
  },
  location: {
    backgroundColor: colors.white,
    shadowColor: colors.black,
  },
  addressContainer: {
    padding: 20,
    backgroundColor: colors.primary,
  },
  title: {
    fontSize: 20,
    color: colors.white,
    fontWeight: "bold",
    textTransform: "uppercase",
    paddingBottom: 10,
  },
  address: {
    color: colors.white,
    fontSize: 15,
  },
  map: {
    height: 250,
  },
});
