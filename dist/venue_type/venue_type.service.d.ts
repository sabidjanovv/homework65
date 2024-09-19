import { VenueType } from "./models/venue_type.model";
import { CreateVenueTypeDto } from "./dto/create-venue_type.dto";
import { UpdateVenueTypeDto } from "./dto/update-venue_type.dto";
export declare class VenueTypeService {
    private venueTypeModel;
    constructor(venueTypeModel: typeof VenueType);
    createVenueType(createVenueTypeDto: CreateVenueTypeDto): Promise<VenueType>;
    getAllVenueType(): Promise<VenueType[]>;
    getVenueTypeById(id: number): Promise<VenueType>;
    getVenueTypeByName(name: string): Promise<VenueType>;
    deleteVenueType(id: number): Promise<number>;
    updateVenueType(id: number, updateVenueTypeDto: UpdateVenueTypeDto): Promise<VenueType>;
}
