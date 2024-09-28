import { Model } from "sequelize-typescript";
import { CustomerAddress } from "../../customer_address/models/customer_address.model";
import { District } from "../../district/models/district.model";
import { Venue } from "../../venue/models/venue.model";
interface RegionCreationAttr {
    name: string;
}
export declare class Region extends Model<Region, RegionCreationAttr> {
    id: number;
    name: string;
    districts: District[];
    venue_photos: Venue[];
    customerAddresses: CustomerAddress[];
}
export {};
