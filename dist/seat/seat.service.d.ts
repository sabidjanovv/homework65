import { CreateSeatDto } from './dto/create-seat.dto';
import { UpdateSeatDto } from './dto/update-seat.dto';
import { Seat } from './models/seat.model';
export declare class SeatService {
    private seatModel;
    constructor(seatModel: typeof Seat);
    create(createSeatDto: CreateSeatDto): Promise<Seat>;
    findAll(): Promise<Seat[]>;
    findOne(id: number): Promise<Seat>;
    update(id: number, updateSeatDto: UpdateSeatDto): Promise<Seat>;
    remove(id: number): Promise<number>;
}
