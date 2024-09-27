import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateVenueDto {
  @ApiProperty({ example: "venue1", description: "Venue nomi" })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: "Qayerdir", description: "Venuening addressi kiritiladi" })
  @IsString()
  @IsNotEmpty()
  address: string;

  @ApiProperty({ example: "40.3757, 76.9469", description: "Venuening koordinatlari" })
  @IsString()
  @IsNotEmpty()
  location: string;

  @ApiProperty({ example: "www.example.com", description: "Venuening bosh URL" })
  @IsString()
  site: string;

  @ApiProperty({ example: "+998-91-123-45-67", description: "Venuening telefon raqami" })
  @IsString()
  @IsNotEmpty()
  phone: string;
}
