import { CreateVenuePhotoDto } from "./dto/create-venue_photo.dto";
import { UpdateVenuePhotoDto } from "./dto/update-venue_photo.dto";
import { VenuePhoto } from "./models/venue_photo.model";
import { FileService } from "../file/file.service";
export declare class VenuePhotoService {
    private venuePhotoModel;
    private readonly fileService;
    constructor(venuePhotoModel: typeof VenuePhoto, fileService: FileService);
    create(createVenuePhotoDto: CreateVenuePhotoDto, image: any): Promise<VenuePhoto>;
    findAll(): Promise<VenuePhoto[]>;
    findOne(id: number): Promise<VenuePhoto>;
    update(id: number, updateVenuePhotoDto: UpdateVenuePhotoDto): Promise<VenuePhoto>;
    remove(id: number): Promise<number>;
}
