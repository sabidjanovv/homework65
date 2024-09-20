import { Model } from "sequelize-typescript";
interface LanguageCreationAttr {
    name: string;
}
export declare class Language extends Model<Language, LanguageCreationAttr> {
    id: number;
    name: string;
}
export {};
