import { Model } from "sequelize-typescript";
interface HumanCategoryAttr {
    name: string;
    start_age: number;
    finish_age: number;
    gender: number;
}
export declare class HumanCategory extends Model<HumanCategory, HumanCategoryAttr> {
    id: number;
    name: string;
    start_age: number;
    finish_age: number;
    gender: number;
}
export {};
