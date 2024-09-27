import { ApiProperty } from "@nestjs/swagger";
import {
  IsDateString,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from "class-validator";

export class CreateCustomerDto {
  @ApiProperty({ example: "John", description: "Foydalanuvchining ismi" })
  @IsNotEmpty()
  @IsString()
  first_name: string;

  @ApiProperty({ example: "Doe", description: "Foydalanuvchining familiyasi" })
  @IsNotEmpty()
  @IsString()
  last_name: string;

  @ApiProperty({
    example: "+998901234567",
    description: "Foydalanuvchining telefon raqami",
  })
  @IsNotEmpty()
  @IsString()
  phone: string;

  @ApiProperty({
    example: "pass123",
    description: "Foydalanuvchining paroli (max 20, min 6 harf)",
  })
  @MaxLength(20)
  @MinLength(6)
  password: string;

  @ApiProperty({
    example: "john.doe@gmail.com",
    description: "Foydalanuvchining emaili",
  })
  @IsEmail()
  @IsNotEmpty()
  @IsString()
  email: string;

  @ApiProperty({
    example: "1990-01-01",
    description: "Foydalanuvchining tug'ilgan sanasi",
  })
  @IsDateString()
  birth_date: string;

  @ApiProperty({
    example: "erkak",
    description: "Foydalanuvchining jinsi (erkak/ayol)",
    required: false,
    enum: ["erkak", "ayol"],
  })
  @IsOptional()
  @IsEnum(["erkak", "ayol"])
  gender: string;

  @ApiProperty({ example: 1, description: "Tilning ID raqami" })
  @IsNumber()
  languageId: number;
}
