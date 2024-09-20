import { CreateCartStatusDto } from './dto/create-cart_status.dto';
import { UpdateCartStatusDto } from './dto/update-cart_status.dto';
import { CartStatus } from './models/cart_status.model';
export declare class CartStatusService {
    private cartStatusModel;
    constructor(cartStatusModel: typeof CartStatus);
    create(createCartStatusDto: CreateCartStatusDto): Promise<CartStatus>;
    findAll(): Promise<CartStatus[]>;
    findOne(id: number): Promise<CartStatus>;
    update(id: number, updateCartStatusDto: UpdateCartStatusDto): Promise<CartStatus>;
    remove(id: number): Promise<number>;
}
