import { Model } from "sequelize-typescript";
import { Ticket } from "src/ticket/models/ticket.model";
interface TicketStatusCreationAttr {
    name: string;
}
export declare class TicketStatus extends Model<TicketStatus, TicketStatusCreationAttr> {
    id: number;
    name: string;
    tickets: Ticket[];
}
export {};
