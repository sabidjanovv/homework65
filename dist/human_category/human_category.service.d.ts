import { HumanCategory } from './models/human_category.model';
import { CreateHumanCategoryDto } from './dto/create-human_category.dto';
import { UpdateHumanCategoryDto } from "./dto/update-human_category.dto";
export declare class HumanCategoryService {
    private humanCategoryModel;
    constructor(humanCategoryModel: typeof HumanCategory);
    createHumanCategory(createHumanCategoryDto: CreateHumanCategoryDto): Promise<HumanCategory>;
    getAllHumanCategory(): Promise<HumanCategory[]>;
    getHumanCategoryById(id: number): Promise<HumanCategory>;
    getHumanCategoryByName(name: string): Promise<HumanCategory>;
    deleteHumanCategory(id: number): Promise<number>;
    updateHumanCategory(id: number, updateHumanCategoryDto: UpdateHumanCategoryDto): Promise<HumanCategory>;
}
