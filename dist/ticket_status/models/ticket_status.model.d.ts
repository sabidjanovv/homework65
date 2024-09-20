import { Model } from "sequelize-typescript";
interface TicketStatusCreationAttr {
    name: string;
}
export declare class TicketStatus extends Model<TicketStatus, TicketStatusCreationAttr> {
    id: number;
    name: string;
}
export {};
