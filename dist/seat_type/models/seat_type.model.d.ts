import { Model } from "sequelize-typescript";
import { Seat } from "../../seat/models/seat.model";
interface SeatTypeAttr {
    name: string;
}
export declare class SeatType extends Model<SeatType, SeatTypeAttr> {
    id: number;
    name: string;
    venue_seats: Seat[];
}
export {};
