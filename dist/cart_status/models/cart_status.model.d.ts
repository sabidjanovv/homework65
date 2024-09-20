import { Model } from "sequelize-typescript";
interface CartStatusCreationAttr {
    name: string;
}
export declare class CartStatus extends Model<CartStatus, CartStatusCreationAttr> {
    id: number;
    name: string;
}
export {};
