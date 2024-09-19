import { Model } from "sequelize-typescript";
interface SeatTypeAttr {
    name: string;
}
export declare class SeatType extends Model<SeatType, SeatTypeAttr> {
    id: number;
    name: string;
}
export {};
