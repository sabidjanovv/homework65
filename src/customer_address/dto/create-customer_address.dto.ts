import { IsNotEmpty, IsNumber, IsString, MaxLength, MinLength } from "class-validator";

export class CreateCustomerAddressDto {
  @IsNumber()
  @IsNotEmpty()
  customerId: number;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  countryId: number;

  @IsNumber()
  @IsNotEmpty()
  regionId: number;

  @IsNumber()
  @IsNotEmpty()
  districtId: number;

  @IsString()
  @IsNotEmpty()
  street: string;

  @IsString()
  @IsNotEmpty()
  house: string;

  @IsString()
  @IsNotEmpty()
  flat: string;
  @IsString()
  @IsNotEmpty()
  location: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(10)
  @MinLength(5)  
  post_index: string;

  @IsString()
  @MaxLength(255)  
  @MinLength(10)  
  info: string;
}
