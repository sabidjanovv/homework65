import { Model } from "sequelize-typescript";
import { Customer } from "../../customer/models/customer.model";
import { Event } from "../../event/models/event.model";
interface LanguageCreationAttr {
    name: string;
}
export declare class Language extends Model<Language, LanguageCreationAttr> {
    id: number;
    name: string;
    events: Event[];
    customers: Customer[];
}
export {};
