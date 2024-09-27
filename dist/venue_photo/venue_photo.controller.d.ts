import { VenuePhotoService } from "./venue_photo.service";
import { CreateVenuePhotoDto } from "./dto/create-venue_photo.dto";
import { UpdateVenuePhotoDto } from "./dto/update-venue_photo.dto";
import { VenuePhoto } from "./models/venue_photo.model";
export declare class VenuePhotoController {
    private readonly venuePhotoService;
    constructor(venuePhotoService: VenuePhotoService);
    create(createVenuePhotoDto: CreateVenuePhotoDto, image: any): Promise<VenuePhoto>;
    findAll(): Promise<VenuePhoto[]>;
    findOne(id: string): Promise<VenuePhoto>;
    update(id: string, updateVenuePhotoDto: UpdateVenuePhotoDto): Promise<VenuePhoto>;
    remove(id: string): Promise<number>;
}
