import {IAddressJsonplaceholder} from "./IAddressJsonplaceholder.ts";
import {ICompanyJsonplaceholder} from "./ICompanyJsonplaceholder.ts";

export interface IUserJsonplaceholder {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IAddressJsonplaceholder;
  phone: string;
  website: string;
  company: ICompanyJsonplaceholder;
}