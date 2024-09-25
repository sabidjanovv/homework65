import { IsStrongPassword, IsNotEmpty } from "class-validator";

export class AdminSignInDto{
    @IsNotEmpty()
    readonly login:string;

    readonly password: string; 
}