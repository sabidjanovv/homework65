import { CreateDistrictDto } from './dto/create-district.dto';
import { UpdateDistrictDto } from './dto/update-district.dto';
import { District } from './models/district.model';
export declare class DistrictService {
    private districtModel;
    constructor(districtModel: typeof District);
    create(createDistrictDto: CreateDistrictDto): Promise<District>;
    findAll(): Promise<District[]>;
    findOne(id: number): Promise<District>;
    update(id: number, updateDistrictDto: UpdateDistrictDto): Promise<District>;
    remove(id: number): Promise<number>;
}
