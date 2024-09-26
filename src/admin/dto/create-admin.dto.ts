import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateAdminDto {
  @ApiProperty({ example: "admin", description: "Adminning ismi" })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: "19244", description: "Adminning unical logini" })
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  login: string;

  @ApiProperty({
    example: "admin123",
    description:
      "Adminning passwordi",
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  password: string;

  @ApiProperty({ example: "false", description: "Adminning active yoki active emaslik statusi" })
  @IsBoolean()
  is_active: boolean;

  @ApiProperty({ example: "false", description: "Adminning creator yoki creator emaslik statusi" })
  @IsBoolean()
  is_creator: boolean;
}
