import { Model } from "sequelize-typescript";
interface BookingStatusCreationAttr {
    name: string;
}
export declare class BookingStatus extends Model<BookingStatus, BookingStatusCreationAttr> {
    id: number;
    name: string;
}
export {};
