import { LanguageService } from "./language.service";
import { CreateLanguageDto } from "./dto/create-language.dto";
import { UpdateLanguageDto } from "./dto/update-language.dto";
import { Language } from "./models/language.model";
export declare class LanguageController {
    private readonly languageService;
    constructor(languageService: LanguageService);
    create(createLanguageDto: CreateLanguageDto): Promise<Language>;
    findAll(): Promise<Language[]>;
    findOne(id: number): Promise<Language>;
    update(id: number, updateLanguageDto: UpdateLanguageDto): Promise<Language>;
    remove(id: number): Promise<number>;
}
