import { VenueTypeService } from "./venue_type.service";
import { CreateVenueTypeDto } from "./dto/create-venue_type.dto";
import { UpdateVenueTypeDto } from "./dto/update-venue_type.dto";
export declare class VenueTypeController {
    private readonly venueTypeService;
    constructor(venueTypeService: VenueTypeService);
    createVenueTypeDto(createVenueTypeDto: CreateVenueTypeDto): Promise<import("./models/venue_type.model").VenueType>;
    getAllVenueType(): Promise<import("./models/venue_type.model").VenueType[]>;
    getVenueTypeByName(name: string): Promise<import("./models/venue_type.model").VenueType>;
    getVenueTypeById(id: number): Promise<import("./models/venue_type.model").VenueType>;
    deleteVenueType(id: number): Promise<number>;
    updateVenueType(id: number, updateVenueTypeDto: UpdateVenueTypeDto): Promise<import("./models/venue_type.model").VenueType>;
}
