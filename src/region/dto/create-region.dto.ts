import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateRegionDto {
  @ApiProperty({
    example: "Toshkent",
    description: "Mintaqaning nomi",
  })
  @IsString()
  @IsNotEmpty()
  name: string;
}
