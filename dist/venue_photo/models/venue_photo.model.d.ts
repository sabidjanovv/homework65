import { Model } from "sequelize-typescript";
import { Venue } from "../../venue/models/venue.model";
interface VenuePhotoCreationAttr {
    venueId: number;
    url: string;
}
export declare class VenuePhoto extends Model<VenuePhoto, VenuePhotoCreationAttr> {
    id: number;
    venueId: number;
    url: string;
    venue: Venue;
}
export {};
