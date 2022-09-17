import { NavigationContainer } from "@react-navigation/native";
import PlacesNavigator from "./places";
import React from "react";

export default () => {
  return (
    <NavigationContainer>
      <PlacesNavigator />
    </NavigationContainer>
  );
};
