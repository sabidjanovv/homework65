import { LanguageService } from './language.service';
import { CreateLanguageDto } from './dto/create-language.dto';
import { UpdateLanguageDto } from './dto/update-language.dto';
export declare class LanguageController {
    private readonly languageService;
    constructor(languageService: LanguageService);
    create(createLanguageDto: CreateLanguageDto): Promise<import("./models/language.model").Language>;
    findAll(): Promise<import("./models/language.model").Language[]>;
    findOne(id: number): Promise<import("./models/language.model").Language>;
    update(id: number, updateLanguageDto: UpdateLanguageDto): Promise<import("./models/language.model").Language>;
    remove(id: number): Promise<number>;
}
