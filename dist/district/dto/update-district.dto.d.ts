import { CreateDistrictDto } from './create-district.dto';
declare const UpdateDistrictDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateDistrictDto>>;
export declare class UpdateDistrictDto extends UpdateDistrictDto_base {
    regionId?: number;
    name?: string;
}
export {};
