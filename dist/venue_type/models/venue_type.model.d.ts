import { Model } from "sequelize-typescript";
interface VenueTypeAttr {
    name: string;
}
export declare class VenueType extends Model<VenueType, VenueTypeAttr> {
    id: number;
    name: string;
}
export {};
