import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateCartStatusDto {
  @ApiProperty({ example: "Active", description: "Status of the cart" })
  @IsString()
  @IsNotEmpty()
  name: string;
}
