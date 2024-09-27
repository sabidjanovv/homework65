import { ApiProperty } from "@nestjs/swagger";
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
} from "class-validator";

export class CreateCustomerCardDto {
  @ApiProperty({
    example: 1,
    description: "Foydalanuvchining unical ID raqami (customer)",
  })
  @IsNumber()
  @IsNotEmpty()
  customerId: number;

  @ApiProperty({ example: "John Doe", description: "Karta egasining ismi" })
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  name: string;

  @ApiProperty({ example: "998901234567", description: "Telefon raqami" })
  @IsString()
  @IsNotEmpty()
  @MaxLength(19)
  @MinLength(13)
  phone: string;

  @ApiProperty({ example: "1234567812345678", description: "Karta raqami" })
  @IsString()
  @IsNotEmpty()
  @MaxLength(16)
  @MinLength(16)
  number: string;

  @ApiProperty({
    example: "25",
    description: "Karta amal qilish yil (YY format)",
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(2)
  @MinLength(2)
  year: string;

  @ApiProperty({
    example: "12",
    description: "Karta amal qilish oy (MM format)",
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(2)
  @MinLength(2)
  month: string;

  @ApiProperty({ example: true, description: "Karta faolligi" })
  is_active: boolean;

  @ApiProperty({ example: true, description: "Asosiy karta" })
  is_main: boolean;
}
