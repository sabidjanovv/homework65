import { Model } from "sequelize-typescript";
import { Event } from "src/event/models/event.model";
interface LanguageCreationAttr {
    name: string;
}
export declare class Language extends Model<Language, LanguageCreationAttr> {
    id: number;
    name: string;
    events: Event[];
}
export {};
