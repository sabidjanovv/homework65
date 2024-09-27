import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateVenueTypeDto {
  @ApiProperty({
    example: "Concert Hall",
    description: "Venue type name",
  })
  @IsString()
  @IsNotEmpty()
  name: string;
}
