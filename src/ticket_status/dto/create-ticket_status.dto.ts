import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateTicketStatusDto {
  @ApiProperty({ example: "Open", description: "Status of the ticket" })
  @IsString()
  @IsNotEmpty()
  name: string;
}
