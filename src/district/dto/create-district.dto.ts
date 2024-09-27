import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateDistrictDto {
  @ApiProperty({
    example: 1,
    description: "Region ID to which the district belongs",
  })
  @IsNumber()
  @IsNotEmpty()
  regionId: number;

  @ApiProperty({
    example: "District Name",
    description: "Name of the district",
  })
  @IsString()
  @IsNotEmpty()
  name: string;
}
