import { PartialType } from '@nestjs/mapped-types';
import { CreateSeatDto } from './create-seat.dto';

export class UpdateSeatDto extends PartialType(CreateSeatDto) {
  sector?: string;
  row_number?: number;
  number?: number;
  venueId?: number;
  seatTypeId?: number;
  locationInSchema?: string;
}
