import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateBookingStatusDto {
  @ApiProperty({ example: "Confirmed", description: "Status of the booking" })
  @IsString()
  @IsNotEmpty()
  name: string;
}
