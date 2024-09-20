import { CreateVenuePhotoDto } from './dto/create-venue_photo.dto';
import { UpdateVenuePhotoDto } from './dto/update-venue_photo.dto';
import { VenuePhoto } from './models/venue_photo.model';
export declare class VenuePhotoService {
    private venuePhotoModel;
    constructor(venuePhotoModel: typeof VenuePhoto);
    create(createVenuePhotoDto: CreateVenuePhotoDto): Promise<VenuePhoto>;
    findAll(): Promise<VenuePhoto[]>;
    findOne(id: number): Promise<VenuePhoto>;
    update(id: number, updateVenuePhotoDto: UpdateVenuePhotoDto): Promise<VenuePhoto>;
    remove(id: number): Promise<number>;
}
