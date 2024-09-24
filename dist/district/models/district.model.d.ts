import { Model } from "sequelize-typescript";
import { CustomerAddress } from "src/customer_address/models/customer_address.model";
import { Region } from "src/region/models/region.model";
import { Venue } from "src/venue/models/venue.model";
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
