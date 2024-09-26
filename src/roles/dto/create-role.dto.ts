import { IsString, IsNotEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateRoleDto {
  @ApiProperty({
    example: "ADMIN",
    description: "Bu yerda Rollar kiritiladi",
  })
  @IsString({ message: "String bo'lishi kerak!" })
  @IsNotEmpty({ message: "Bo'sh bo'lmasligi kerak!" })
  value: string;

  @ApiProperty({
    example: "ADMIN roli ma'lumotlari",
    description: "Bu yerda rol bo'yicha ma'lumot kiritiladi",
  })
  @IsString({ message: "String bo'lishi kerak!" })
  @IsNotEmpty({ message: "Bo'sh bo'lmasligi kerak!" })
  description: string;
}
