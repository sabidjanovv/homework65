import { ApiProperty } from "@nestjs/swagger";

export class CreateVenueVenueTypeDto {
  @ApiProperty({ example: 1, description: "Venue ID" })
  venueId: number;

  @ApiProperty({ example: 2, description: "Venue Type ID" })
  venueTypeId: number;
}
