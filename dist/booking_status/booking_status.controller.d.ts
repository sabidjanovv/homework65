import { BookingStatusService } from './booking_status.service';
import { CreateBookingStatusDto } from './dto/create-booking_status.dto';
import { UpdateBookingStatusDto } from './dto/update-booking_status.dto';
export declare class BookingStatusController {
    private readonly bookingStatusService;
    constructor(bookingStatusService: BookingStatusService);
    create(createBookingStatusDto: CreateBookingStatusDto): Promise<import("./models/booking_status.model").BookingStatus>;
    findAll(): Promise<import("./models/booking_status.model").BookingStatus[]>;
    findOne(id: string): Promise<import("./models/booking_status.model").BookingStatus>;
    update(id: string, updateBookingStatusDto: UpdateBookingStatusDto): Promise<import("./models/booking_status.model").BookingStatus>;
    remove(id: string): Promise<number>;
}
