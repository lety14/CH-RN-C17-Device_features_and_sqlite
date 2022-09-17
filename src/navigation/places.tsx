import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { TouchableOpacity } from "react-native";
import IonicIcons from "@expo/vector-icons/Ionicons";
import { MapsScreen, NewPlacesScreen, PlaceDetailsScreen, PlaceListScreen } from "../screens";
import colors from "../utils/constants/colors";
import { ILocation } from "../components/location-selector";

export type RootStackParamList = {
  Places: undefined;
  Maps: undefined;
  NewPlaces: {
    mapLocation: ILocation;
  };
  PlaceDetails: {
    placeID: number;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const PlacesNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Places">
      <Stack.Screen
        name="Places"
        component={PlaceListScreen}
        options={({ navigation }) => ({
          title: "Mis viajes",
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("NewPlaces")}>
              <IonicIcons name="add-circle-outline" size={38} color={colors.primary} />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="NewPlaces"
        component={NewPlacesScreen}
        options={{ title: "Agregar lugar" }}
      />
      <Stack.Screen
        name="PlaceDetails"
        component={PlaceDetailsScreen}
        options={{ title: "Detalles" }}
      />
      <Stack.Screen name="Maps" component={MapsScreen} options={{ title: "Mapas" }} />
    </Stack.Navigator>
  );
};

export default PlacesNavigator;
