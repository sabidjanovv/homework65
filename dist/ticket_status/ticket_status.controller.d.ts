import { TicketStatusService } from './ticket_status.service';
import { CreateTicketStatusDto } from './dto/create-ticket_status.dto';
import { UpdateTicketStatusDto } from './dto/update-ticket_status.dto';
export declare class TicketStatusController {
    private readonly ticketStatusService;
    constructor(ticketStatusService: TicketStatusService);
    create(createTicketStatusDto: CreateTicketStatusDto): Promise<import("./models/ticket_status.model").TicketStatus>;
    findAll(): Promise<import("./models/ticket_status.model").TicketStatus[]>;
    findOne(id: string): Promise<import("./models/ticket_status.model").TicketStatus>;
    update(id: string, updateTicketStatusDto: UpdateTicketStatusDto): Promise<import("./models/ticket_status.model").TicketStatus>;
    remove(id: string): Promise<number>;
}
