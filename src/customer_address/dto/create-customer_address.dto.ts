import { ApiProperty } from "@nestjs/swagger";
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
} from "class-validator";

export class CreateCustomerAddressDto {
  @ApiProperty({ example: 1, description: "Customer ID" })
  @IsNumber()
  @IsNotEmpty()
  customerId: number;

  @ApiProperty({
    example: "Home",
    description: "Address name (e.g., Home, Office)",
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 1, description: "Country ID" })
  @IsNumber()
  @IsNotEmpty()
  countryId: number;

  @ApiProperty({ example: 2, description: "Region ID" })
  @IsNumber()
  @IsNotEmpty()
  regionId: number;

  @ApiProperty({ example: 3, description: "District ID" })
  @IsNumber()
  @IsNotEmpty()
  districtId: number;

  @ApiProperty({ example: "Main Street", description: "Street name" })
  @IsString()
  @IsNotEmpty()
  street: string;

  @ApiProperty({ example: "15", description: "House number" })
  @IsString()
  @IsNotEmpty()
  house: string;

  @ApiProperty({ example: "45A", description: "Flat number" })
  @IsString()
  @IsNotEmpty()
  flat: string;

  @ApiProperty({
    example: "41.40338, 2.17403",
    description: "Geolocation coordinates",
  })
  @IsString()
  @IsNotEmpty()
  location: string;

  @ApiProperty({ example: "12345", description: "Postal code" })
  @IsString()
  @IsNotEmpty()
  @MaxLength(10)
  @MinLength(5)
  post_index: string;

  @ApiProperty({
    example: "Near central park",
    description: "Additional information about the address",
  })
  @IsString()
  @MaxLength(255)
  @MinLength(10)
  info: string;
}
