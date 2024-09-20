import { SeatService } from './seat.service';
import { CreateSeatDto } from './dto/create-seat.dto';
import { UpdateSeatDto } from './dto/update-seat.dto';
export declare class SeatController {
    private readonly seatService;
    constructor(seatService: SeatService);
    create(createSeatDto: CreateSeatDto): Promise<import("./models/seat.model").Seat>;
    findAll(): Promise<import("./models/seat.model").Seat[]>;
    findOne(id: number): Promise<import("./models/seat.model").Seat>;
    update(id: number, updateSeatDto: UpdateSeatDto): Promise<import("./models/seat.model").Seat>;
    remove(id: number): Promise<number>;
}
