import { IsDateString, IsEmail, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export class CreateCustomerDto {
  @IsNotEmpty()
  @IsString()
  first_name: string;

  @IsNotEmpty()
  @IsString()
  last_name: string;

  @IsNotEmpty()
  @IsString()
  phone: string;

  @MaxLength(20)
  @MinLength(6)
  password: string;

  @IsEmail()
  @IsNotEmpty()
  @IsString()
  email: string;

  @IsDateString()
  birth_date: string;

  @IsOptional() 
  @IsEnum(["erkak", "ayol"]) 
  gender: string;

  @IsNumber()
  languageId: number;
}
