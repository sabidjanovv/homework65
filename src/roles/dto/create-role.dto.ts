import { IsString, IsNotEmpty } from "class-validator";

export class CreateRoleDto {
  @IsString({ message: "String bo'lishi kerak!" })
  @IsNotEmpty({ message: "Bo'sh bo'lmasligi kerak!" })
  value: string;

  @IsString({ message: "String bo'lishi kerak!" })
  @IsNotEmpty({ message: "Bo'sh bo'lmasligi kerak!" })
  description: string;
}
