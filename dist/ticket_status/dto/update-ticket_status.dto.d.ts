import { CreateTicketStatusDto } from './create-ticket_status.dto';
declare const UpdateTicketStatusDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateTicketStatusDto>>;
export declare class UpdateTicketStatusDto extends UpdateTicketStatusDto_base {
    name?: string;
}
export {};
