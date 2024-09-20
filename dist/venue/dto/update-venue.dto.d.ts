import { CreateVenueDto } from './create-venue.dto';
declare const UpdateVenueDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateVenueDto>>;
export declare class UpdateVenueDto extends UpdateVenueDto_base {
    name?: string;
    address?: string;
    location?: string;
    site?: string;
    phone?: string;
}
export {};
