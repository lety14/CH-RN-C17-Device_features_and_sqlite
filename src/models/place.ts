import { ILocation } from "../components/location-selector";

class Place {
  id: number;
  title: string;
  image: string;
  address: string;
  coords: ILocation;

  constructor(id: number, title: string, image: string, address: string, coords: ILocation) {
    this.id = id;
    this.title = title;
    this.image = image;
    this.address = address;
    this.coords = coords;
  }
}

export default Place;
