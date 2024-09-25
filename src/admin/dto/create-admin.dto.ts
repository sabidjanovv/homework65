import { IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateAdminDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  login: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  password: string;

  is_active: boolean;
  is_creator: boolean;
}
