import { ApiProperty } from "@nestjs/swagger";

export class CreateSeatDto {
  @ApiProperty({ example: "A", description: "Sector of the seat" })
  sector: string;

  @ApiProperty({ example: 1, description: "Row number of the seat" })
  row_number: number;

  @ApiProperty({ example: 5, description: "Seat number" })
  number: number;

  @ApiProperty({ example: 1, description: "ID of the venue" })
  venueId: number;

  @ApiProperty({ example: 2, description: "ID of the seat type" })
  seatTypeId: number;

  @ApiProperty({ example: "1A", description: "Location in the seating schema" })
  locationInSchema: string;
}
