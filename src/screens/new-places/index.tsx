import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { ScrollView, Text, TextInput, View } from "react-native";
import {
  ButtonComponent,
  LocationSelectorComponent,
  ImageSelectorComponent,
} from "../../components";
import { ILocation } from "../../components/location-selector";
import { RootStackParamList } from "../../navigation/places";
import { useAppDispatch } from "../../store/hooks";
import { savePlace } from "../../store/place.slice";
import { styles } from "./styles";

type PlaceDetailsProps = NativeStackScreenProps<RootStackParamList, "NewPlaces">;

const NewPlacesScreen = ({ navigation }: PlaceDetailsProps) => {
  const [title, setTitle] = useState<string>("");
  const [image, setImage] = useState("");
  const [isValidData, setIsValidData] = useState<boolean>();
  const [location, setLocation] = useState<ILocation>({ lat: 0, lng: 0 });

  const dispatch = useAppDispatch();
  const onHandleChange = (text: string) => {
    setTitle(text);
  };

  const onHandleSubmit = () => {
    if (title !== "" && image !== "" && location.lat !== 0 && location.lng !== 0) {
      dispatch(savePlace(title, image, location));
      navigation.navigate("Places");
    } else {
      setIsValidData(true);
    }
  };

  const onHandleImageSelect = (imageUrl: string) => {
    setImage(imageUrl);
  };

  const onHandleLocationSelect = (location: ILocation) => {
    setLocation(location);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <TextInput
          style={styles.input}
          placeholder="Nueva ubicacion"
          onChangeText={onHandleChange}
          value={title}
        />
        <View style={styles.component}>
          <ImageSelectorComponent onImage={onHandleImageSelect} />
        </View>
        <View style={styles.component}>
          <LocationSelectorComponent
            onLocation={onHandleLocationSelect}
            //     navigationData={navigation}
          />
        </View>
        <View style={styles.component}>
          {isValidData && <Text style={styles.errorMessage}>Complete todos los campos</Text>}
          <ButtonComponent text="Guardar" onPress={onHandleSubmit} />
        </View>
      </View>
    </ScrollView>
  );
};

export default NewPlacesScreen;
