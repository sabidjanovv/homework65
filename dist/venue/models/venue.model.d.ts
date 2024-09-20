import { Model } from "sequelize-typescript";
import { District } from "src/district/models/district.model";
import { Region } from "src/region/models/region.model";
import { Seat } from "src/seat/models/seat.model";
import { VenuePhoto } from "src/venue_photo/models/venue_photo.model";
interface VenueCreationAttr {
    name: string;
    address: string;
    location: string;
    site: string;
    phone: string;
    regionId: number;
}
export declare class Venue extends Model<Venue, VenueCreationAttr> {
    id: number;
    name: string;
    address: string;
    location: string;
    site: string;
    phone: string;
    regionId: number;
    region: Region;
    districtId: number;
    district: District;
    venue_photos: VenuePhoto[];
    seats: Seat[];
}
export {};
