import { Model } from "sequelize-typescript";
import { CustomerAddress } from "../../customer_address/models/customer_address.model";
import { Region } from "../../region/models/region.model";
import { Venue } from "../../venue/models/venue.model";
interface DistrictCreationAttr {
    regionId: number;
    name: string;
}
export declare class District extends Model<District, DistrictCreationAttr> {
    id: number;
    regionId: number;
    name: string;
    region: Region;
    venues: Venue[];
    customerAddresses: CustomerAddress[];
}
export {};
