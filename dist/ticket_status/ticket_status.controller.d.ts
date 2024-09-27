import { TicketStatusService } from "./ticket_status.service";
import { CreateTicketStatusDto } from "./dto/create-ticket_status.dto";
import { UpdateTicketStatusDto } from "./dto/update-ticket_status.dto";
import { TicketStatus } from "./models/ticket_status.model";
export declare class TicketStatusController {
    private readonly ticketStatusService;
    constructor(ticketStatusService: TicketStatusService);
    create(createTicketStatusDto: CreateTicketStatusDto): Promise<TicketStatus>;
    findAll(): Promise<TicketStatus[]>;
    findOne(id: string): Promise<TicketStatus>;
    update(id: string, updateTicketStatusDto: UpdateTicketStatusDto): Promise<TicketStatus>;
    remove(id: string): Promise<number>;
}
