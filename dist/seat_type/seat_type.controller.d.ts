import { SeatTypeService } from "./seat_type.service";
import { CreateSeatTypeDto } from "./dto/create-seat_type.dto";
import { UpdateSeatTypeDto } from "./dto/update-seat_type.dto";
export declare class SeatTypeController {
    private readonly seatTypeService;
    constructor(seatTypeService: SeatTypeService);
    createSeatTypeDto(createSeatTypeDto: CreateSeatTypeDto): Promise<import("./models/seat_type.model").SeatType>;
    getAllSeatType(): Promise<import("./models/seat_type.model").SeatType[]>;
    getSeatTypeByName(name: string): Promise<import("./models/seat_type.model").SeatType>;
    getSeatTypeById(id: number): Promise<import("./models/seat_type.model").SeatType>;
    deleteSeatType(id: number): Promise<number>;
    updateSeatType(id: number, updateSeatTypeDto: UpdateSeatTypeDto): Promise<import("./models/seat_type.model").SeatType>;
}
