import { VenueTypeService } from "./venue_type.service";
import { CreateVenueTypeDto } from "./dto/create-venue_type.dto";
import { UpdateVenueTypeDto } from "./dto/update-venue_type.dto";
import { VenueType } from "./models/venue_type.model";
export declare class VenueTypeController {
    private readonly venueTypeService;
    constructor(venueTypeService: VenueTypeService);
    createVenueType(createVenueTypeDto: CreateVenueTypeDto): Promise<VenueType>;
    getAllVenueType(): Promise<VenueType[]>;
    getVenueTypeByName(name: string): Promise<VenueType>;
    getVenueTypeById(id: number): Promise<VenueType>;
    deleteVenueType(id: number): Promise<number>;
    updateVenueType(id: number, updateVenueTypeDto: UpdateVenueTypeDto): Promise<VenueType>;
}
