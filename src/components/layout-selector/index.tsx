import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import colors from "../../utils/constants/colors";

type Props = {
  children: JSX.Element;
  picked: boolean;
  message: string;
  buttonIcon: "camera" | "map";
  onHandle: () => void;
  buttonIconAdditional?: "locate";
  onHandleAdditional?: () => void;
};

const LayoutSelector = ({
  children,
  picked,
  message,
  onHandle,
  buttonIcon,
  buttonIconAdditional,
  onHandleAdditional,
}: Props): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.preview}>{!picked ? <Text>{message}</Text> : children}</View>
      {buttonIconAdditional && (
        <TouchableOpacity style={styles.containerTouchableAdditional} onPress={onHandleAdditional}>
          <Ionicons name={`${buttonIconAdditional}`} size={22} color={colors.white} />
        </TouchableOpacity>
      )}
      <TouchableOpacity style={styles.containerTouchable} onPress={onHandle}>
        <Ionicons name={`${buttonIcon}`} size={22} color={colors.white} />
      </TouchableOpacity>
    </View>
  );
};

export default LayoutSelector;
