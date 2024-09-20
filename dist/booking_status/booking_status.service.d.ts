import { CreateBookingStatusDto } from './dto/create-booking_status.dto';
import { UpdateBookingStatusDto } from './dto/update-booking_status.dto';
import { BookingStatus } from './models/booking_status.model';
export declare class BookingStatusService {
    private bookingStatusModel;
    constructor(bookingStatusModel: typeof BookingStatus);
    create(createBookingStatusDto: CreateBookingStatusDto): Promise<BookingStatus>;
    findAll(): Promise<BookingStatus[]>;
    findOne(id: number): Promise<BookingStatus>;
    update(id: number, updateBookingStatusDto: UpdateBookingStatusDto): Promise<BookingStatus>;
    remove(id: number): Promise<number>;
}
