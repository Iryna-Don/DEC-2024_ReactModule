import {ICoordinates} from "./ICoordinates.tsx";

export interface IAddress {
  address: string;
  city: string;
  state: string;
  stateCode: string;
  postalCode: string;
  coordinates: ICoordinates;
  country: string;
}

