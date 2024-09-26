import { VenuePhotoService } from "./venue_photo.service";
import { CreateVenuePhotoDto } from "./dto/create-venue_photo.dto";
import { UpdateVenuePhotoDto } from "./dto/update-venue_photo.dto";
export declare class VenuePhotoController {
    private readonly venuePhotoService;
    constructor(venuePhotoService: VenuePhotoService);
    create(createVenuePhotoDto: CreateVenuePhotoDto, image: any): Promise<import("./models/venue_photo.model").VenuePhoto>;
    findAll(): Promise<import("./models/venue_photo.model").VenuePhoto[]>;
    findOne(id: string): Promise<import("./models/venue_photo.model").VenuePhoto>;
    update(id: string, updateVenuePhotoDto: UpdateVenuePhotoDto): Promise<import("./models/venue_photo.model").VenuePhoto>;
    remove(id: string): Promise<number>;
}
