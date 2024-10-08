import { CreateVenueDto } from './dto/create-venue.dto';
import { UpdateVenueDto } from './dto/update-venue.dto';
import { Venue } from './models/venue.model';
export declare class VenueService {
    private venueModel;
    constructor(venueModel: typeof Venue);
    create(createVenueDto: CreateVenueDto): Promise<Venue>;
    findAll(): Promise<Venue[]>;
    findOne(id: number): Promise<Venue>;
    update(id: number, updateVenueDto: UpdateVenueDto): Promise<Venue>;
    remove(id: number): Promise<number>;
}
