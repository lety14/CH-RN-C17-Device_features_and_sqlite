import React from "react";
import { View, Image } from "react-native";
import { URL_MAPS } from "../../utils/maps";
import { ILocation } from "../location-selector";
import { styles } from "./styles";

export type MapPreviewProps = {
  location: ILocation | undefined;
};

const MapPreview = ({ location }: MapPreviewProps) => {
  const { lat, lng } = location || {};

  const mapPreviewUrl = lat !== undefined && lng !== undefined ? URL_MAPS(lat, lng) : "";

  return (
    <View style={styles.container}>
      {<Image style={styles.mapImage} source={{ uri: mapPreviewUrl }} />}
    </View>
  );
};

export default MapPreview;
