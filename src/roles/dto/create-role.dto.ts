import { IsString, IsNotEmpty } from "class-validator";

export class CreateRoleDto {
    @IsString()
    @IsNotEmpty()
    value:string;
    description: string;
}
