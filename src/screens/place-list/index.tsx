import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { FlatList, Image, Text, View } from "react-native";
import { PlaceItemComponent } from "../../components";
import { RootStackParamList } from "../../navigation/places";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { loadPlaces } from "../../store/place.slice";
import IPlaces from "../../types/IPlaces.type";
import { styles } from "./styles";

type ProductsProps = NativeStackScreenProps<RootStackParamList, "Places">;

const PlaceListScreen = ({ navigation }: ProductsProps) => {
  const dispatch = useAppDispatch();
  const places = useAppSelector((state) => state.places.places);

  useEffect(() => {
    dispatch(loadPlaces());
  }, [dispatch]);

  const renderItem = ({ item }: { item: IPlaces }) => {
    return (
      <PlaceItemComponent
        {...item}
        onSelect={() => navigation.navigate("PlaceDetails", { placeID: item.id })}
      />
    );
  };

  const ListEmptyComponent = () => {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No hay lugares</Text>
        <Image style={styles.image} source={require("../../../assets/empty.gif")} />
      </View>
    );
  };

  return (
    <FlatList
      style={styles.container}
      data={places}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderItem}
      ListEmptyComponent={ListEmptyComponent}
    />
  );
};

export default PlaceListScreen;
