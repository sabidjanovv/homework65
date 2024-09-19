import { SeatType } from "./models/seat_type.model";
import { CreateSeatTypeDto } from "./dto/create-seat_type.dto";
import { UpdateSeatTypeDto } from "./dto/update-seat_type.dto";
export declare class SeatTypeService {
    private seatTypeModel;
    constructor(seatTypeModel: typeof SeatType);
    createSeatType(createSeatTypeDto: CreateSeatTypeDto): Promise<SeatType>;
    getAllSeatType(): Promise<SeatType[]>;
    getSeatTypeById(id: number): Promise<SeatType>;
    getSeatTypeByName(name: string): Promise<SeatType>;
    deleteSeatType(id: number): Promise<number>;
    updateSeatType(id: number, updateSeatTypeDto: UpdateSeatTypeDto): Promise<SeatType>;
}
