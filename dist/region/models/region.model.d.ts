import { Model } from "sequelize-typescript";
import { District } from "src/district/models/district.model";
import { Venue } from "src/venue/models/venue.model";
interface RegionCreationAttr {
    name: string;
}
export declare class Region extends Model<Region, RegionCreationAttr> {
    id: number;
    name: string;
    districts: District[];
    venue_photos: Venue[];
}
export {};
