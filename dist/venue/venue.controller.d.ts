import { VenueService } from './venue.service';
import { CreateVenueDto } from './dto/create-venue.dto';
import { UpdateVenueDto } from './dto/update-venue.dto';
export declare class VenueController {
    private readonly venueService;
    constructor(venueService: VenueService);
    create(createVenueDto: CreateVenueDto): Promise<import("./models/venue.model").Venue>;
    findAll(): Promise<import("./models/venue.model").Venue[]>;
    findOne(id: number): Promise<import("./models/venue.model").Venue>;
    update(id: number, updateVenueDto: UpdateVenueDto): Promise<import("./models/venue.model").Venue>;
    remove(id: number): Promise<number>;
}
