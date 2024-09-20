import { CartStatusService } from './cart_status.service';
import { CreateCartStatusDto } from './dto/create-cart_status.dto';
import { UpdateCartStatusDto } from './dto/update-cart_status.dto';
export declare class CartStatusController {
    private readonly cartStatusService;
    constructor(cartStatusService: CartStatusService);
    create(createCartStatusDto: CreateCartStatusDto): Promise<import("./models/cart_status.model").CartStatus>;
    findAll(): Promise<import("./models/cart_status.model").CartStatus[]>;
    findOne(id: string): Promise<import("./models/cart_status.model").CartStatus>;
    update(id: string, updateCartStatusDto: UpdateCartStatusDto): Promise<import("./models/cart_status.model").CartStatus>;
    remove(id: string): Promise<number>;
}
