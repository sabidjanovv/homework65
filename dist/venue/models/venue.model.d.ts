import { Model } from "sequelize-typescript";
import { District } from "../../district/models/district.model";
import { Event } from "../../event/models/event.model";
import { Region } from "../../region/models/region.model";
import { Seat } from "../../seat/models/seat.model";
import { VenuePhoto } from "../../venue_photo/models/venue_photo.model";
import { VenueType } from "../../venue_type/models/venue_type.model";
interface VenueCreationAttr {
    name: string;
    address: string;
    location: string;
    site: string;
    phone: string;
    regionId: number;
    districtId: number;
}
export declare class Venue extends Model<Venue, VenueCreationAttr> {
    id: number;
    name: string;
    address: string;
    location: string;
    site: string;
    phone: string;
    schema: string[];
    regionId: number;
    region: Region;
    districtId: number;
    district: District;
    venue_photos: VenuePhoto[];
    seats: Seat[];
    venue_types: VenueType[];
    events: Event[];
}
export {};
