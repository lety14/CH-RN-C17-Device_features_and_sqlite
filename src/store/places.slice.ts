import { createSlice } from "@reduxjs/toolkit";
import { ILocation } from "../components/location-selector";
import Place from "../models/place";
import IPlaces from "../types/IPlaces.type";
import { URL_GEOCODING } from "../utils/maps";
import { AppDispatch } from "./store";

interface IPlace {
  places: IPlaces[];
}

const initialState: IPlace = {
  places: [],
};

const placeSlice = createSlice({
  name: "place",
  initialState,
  reducers: {
    addPlace: (state, action) => {
      const newPlace = new Place(
        Date.now(),
        action.payload.title,
        action.payload.image,
        action.payload.address,
        action.payload.coords
      );
      state.places.push(newPlace);
    },
  },
});

export const savePlace = (title: string, image: string, coords: ILocation) => {
  return async (dispatch: AppDispatch) => {
    const response = await fetch(URL_GEOCODING(coords.lat, coords.lng));
    const address = "-";

    if (!response.ok) throw new Error("No se ha podido conectar con el servidor");

    const data = await response.json();

    if (!data.results) throw new Error("No se ha podido encontrar la dirección");

    // address = data.results[0].formatted_address ? data.results[0].formatted_address : "-";

    try {
      dispatch(addPlace({ title, image, address, coords }));
    } catch (error) {
      console.log("error", error);
      throw error;
    }
  };
};

export const { addPlace } = placeSlice.actions;

export default placeSlice.reducer;
