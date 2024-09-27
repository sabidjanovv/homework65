import { SeatTypeService } from "./seat_type.service";
import { CreateSeatTypeDto } from "./dto/create-seat_type.dto";
import { UpdateSeatTypeDto } from "./dto/update-seat_type.dto";
import { SeatType } from "./models/seat_type.model";
export declare class SeatTypeController {
    private readonly seatTypeService;
    constructor(seatTypeService: SeatTypeService);
    createSeatTypeDto(createSeatTypeDto: CreateSeatTypeDto): Promise<SeatType>;
    getAllSeatType(): Promise<SeatType[]>;
    getSeatTypeByName(name: string): Promise<SeatType>;
    getSeatTypeById(id: number): Promise<SeatType>;
    deleteSeatType(id: number): Promise<number>;
    updateSeatType(id: number, updateSeatTypeDto: UpdateSeatTypeDto): Promise<SeatType>;
}
