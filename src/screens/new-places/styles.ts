import { StyleSheet } from "react-native";
import colors from "../../utils/constants/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    flex: 1,
    margin: 20,
    marginTop: 40,
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
  },
  input: {
    borderBottomColor: colors.primary,
    borderBottomWidth: 1,
    marginBottom: 20,
    padding: 5,
  },
  component: {
    paddingTop: 15,
  },
  errorMessage: {
    color: "red",
    paddingBottom: 6,
  },
});
