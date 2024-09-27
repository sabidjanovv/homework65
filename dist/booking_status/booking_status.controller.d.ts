import { BookingStatusService } from "./booking_status.service";
import { CreateBookingStatusDto } from "./dto/create-booking_status.dto";
import { UpdateBookingStatusDto } from "./dto/update-booking_status.dto";
import { BookingStatus } from "./models/booking_status.model";
export declare class BookingStatusController {
    private readonly bookingStatusService;
    constructor(bookingStatusService: BookingStatusService);
    create(createBookingStatusDto: CreateBookingStatusDto): Promise<BookingStatus>;
    findAll(): Promise<BookingStatus[]>;
    findOne(id: string): Promise<BookingStatus>;
    update(id: string, updateBookingStatusDto: UpdateBookingStatusDto): Promise<BookingStatus>;
    remove(id: string): Promise<number>;
}
