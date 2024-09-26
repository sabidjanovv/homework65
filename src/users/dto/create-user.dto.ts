import { ApiProperty } from "@nestjs/swagger";
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
} from "class-validator";

export class CreateUserDto {
  @ApiProperty({ example: "user1", description: "Foydalanuvchining ismi" })
  @IsString()
  @IsNotEmpty()
  name: string;


  @ApiProperty({
    example: "user1@gmail.com",
    description:
      "Foydalanuvchining gmaili",
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: "u$er123",
    description:
      "Foydalanuvchining passwordi (Strong password: Katta va kichik harfi, symbol, number)",
  })
  @IsStrongPassword({ minLength: 6 })
  password: string;

  @ApiProperty({ example: "USER", description: "Foydalanuvchining roli" })
  @IsString()
  @IsNotEmpty()
  role_value: string;
}
