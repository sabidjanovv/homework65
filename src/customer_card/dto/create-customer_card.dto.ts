import { IsNotEmpty, IsNumber, IsString, MaxLength, MinLength } from "class-validator";

export class CreateCustomerCardDto {
  @IsNumber()
  @IsNotEmpty()
  customerId: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  name: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(19)
  @MinLength(13)
  phone: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(16)
  @MinLength(16)
  number: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(2)
  @MinLength(2)
  year: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(2)
  @MinLength(2)
  month: string;
  
  is_active: boolean;
  is_main: boolean;
}
