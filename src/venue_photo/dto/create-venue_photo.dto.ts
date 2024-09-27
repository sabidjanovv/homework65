import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateVenuePhotoDto {
  @ApiProperty({ example: 1, description: "Venuening Id raqami" })
  venue_id: number;

  @ApiProperty({ example: "photo.jpg", description: "Rasmning URLi yoki fayldan yuklash" })
  @IsString()
  @IsOptional()
  url: string;
}
