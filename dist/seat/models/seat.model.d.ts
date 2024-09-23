import { Model } from "sequelize-typescript";
import { SeatType } from "src/seat_type/models/seat_type.model";
import { Ticket } from "src/ticket/models/ticket.model";
import { Venue } from "src/venue/models/venue.model";
interface SeatCreationAttr {
    sector: string;
    row_number: number;
    number: number;
    locationInSchema: string;
    venueId: number;
    seatTypeId: number;
}
export declare class Seat extends Model<Seat, SeatCreationAttr> {
    id: number;
    sector: string;
    row_number: number;
    number: number;
    venueId: number;
    venue: Venue;
    seatTypeId: number;
    seatType: SeatType;
    locationInSchema: string;
    ticket: Ticket[];
}
export {};
