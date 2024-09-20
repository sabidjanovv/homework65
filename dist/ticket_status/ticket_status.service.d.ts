import { CreateTicketStatusDto } from './dto/create-ticket_status.dto';
import { UpdateTicketStatusDto } from './dto/update-ticket_status.dto';
import { TicketStatus } from './models/ticket_status.model';
export declare class TicketStatusService {
    private ticketStatusModel;
    constructor(ticketStatusModel: typeof TicketStatus);
    create(createTicketStatusDto: CreateTicketStatusDto): Promise<TicketStatus>;
    findAll(): Promise<TicketStatus[]>;
    findOne(id: number): Promise<TicketStatus>;
    update(id: number, updateTicketStatusDto: UpdateTicketStatusDto): Promise<TicketStatus>;
    remove(id: number): Promise<number>;
}
