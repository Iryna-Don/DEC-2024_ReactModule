import {IGeoJsonplaceholder} from "./IGeoJsonplaceholder.ts";

export interface IAddressJsonplaceholder {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: IGeoJsonplaceholder;
}

