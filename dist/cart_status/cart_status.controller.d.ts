import { CartStatusService } from "./cart_status.service";
import { CreateCartStatusDto } from "./dto/create-cart_status.dto";
import { UpdateCartStatusDto } from "./dto/update-cart_status.dto";
import { CartStatus } from "./models/cart_status.model";
export declare class CartStatusController {
    private readonly cartStatusService;
    constructor(cartStatusService: CartStatusService);
    create(createCartStatusDto: CreateCartStatusDto): Promise<CartStatus>;
    findAll(): Promise<CartStatus[]>;
    findOne(id: string): Promise<CartStatus>;
    update(id: string, updateCartStatusDto: UpdateCartStatusDto): Promise<CartStatus>;
    remove(id: string): Promise<number>;
}
