import { ILocation } from "../components/location-selector";

export default interface IPlace {
  id: number;
  title: string;
  image: string;
  address: string;
  coords: ILocation;
}
