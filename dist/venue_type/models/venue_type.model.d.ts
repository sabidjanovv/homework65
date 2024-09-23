import { Model } from "sequelize-typescript";
import { Venue } from "src/venue/models/venue.model";
interface VenueTypeAttr {
    name: string;
}
export declare class VenueType extends Model<VenueType, VenueTypeAttr> {
    id: number;
    name: string;
    venues: Venue[];
}
export {};
