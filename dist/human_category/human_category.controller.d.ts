import { HumanCategoryService } from "./human_category.service";
import { CreateHumanCategoryDto } from "./dto/create-human_category.dto";
import { UpdateHumanCategoryDto } from "./dto/update-human_category.dto";
export declare class HumanCategoryController {
    private readonly humanCategoryService;
    constructor(humanCategoryService: HumanCategoryService);
    createHumanCategory(createHumanCategoryDto: CreateHumanCategoryDto): Promise<import("./models/human_category.model").HumanCategory>;
    getAllHumanCategory(): Promise<import("./models/human_category.model").HumanCategory[]>;
    getHumanCategoryByName(name: string): Promise<import("./models/human_category.model").HumanCategory>;
    getHumanCategoryById(id: number): Promise<import("./models/human_category.model").HumanCategory>;
    deleteHumanCategory(id: number): Promise<number>;
    updateHumanCategory(id: number, updateHumanCategoryDto: UpdateHumanCategoryDto): Promise<import("./models/human_category.model").HumanCategory>;
}
