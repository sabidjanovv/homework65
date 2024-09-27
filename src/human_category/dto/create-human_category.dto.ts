import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsInt, Min } from "class-validator";

export class CreateHumanCategoryDto {
  @ApiProperty({
    example: "Children",
    description: "Kategoriya nomi (masalan, Bolalar)",
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 6,
    description: "Kategoriya uchun boshlanish yoshi",
  })

  start_age: number;

  @ApiProperty({
    example: 12,
    description: "Kategoriya uchun tugash yoshi",
  })

  finish_age: number;

  @ApiProperty({
    example: 1,
    description: "Jinsi (0: ayol, 1: erkak)",
  })
  gender: number;
}
