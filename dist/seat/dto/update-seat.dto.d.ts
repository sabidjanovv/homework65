import { CreateSeatDto } from './create-seat.dto';
declare const UpdateSeatDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateSeatDto>>;
export declare class UpdateSeatDto extends UpdateSeatDto_base {
    sector?: string;
    row_number?: number;
    number?: number;
    venueId?: number;
    seatTypeId?: number;
    locationInSchema?: string;
}
export {};
