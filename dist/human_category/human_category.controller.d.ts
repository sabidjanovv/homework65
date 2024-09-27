import { HumanCategoryService } from "./human_category.service";
import { CreateHumanCategoryDto } from "./dto/create-human_category.dto";
import { UpdateHumanCategoryDto } from "./dto/update-human_category.dto";
import { HumanCategory } from "./models/human_category.model";
export declare class HumanCategoryController {
    private readonly humanCategoryService;
    constructor(humanCategoryService: HumanCategoryService);
    createHumanCategory(createHumanCategoryDto: CreateHumanCategoryDto): Promise<HumanCategory>;
    getAllHumanCategory(): Promise<HumanCategory[]>;
    getHumanCategoryByName(name: string): Promise<HumanCategory>;
    getHumanCategoryById(id: number): Promise<HumanCategory>;
    deleteHumanCategory(id: number): Promise<number>;
    updateHumanCategory(id: number, updateHumanCategoryDto: UpdateHumanCategoryDto): Promise<HumanCategory>;
}
