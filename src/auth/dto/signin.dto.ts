import { IsEmail, IsStrongPassword, IsNotEmpty } from "class-validator";

export class SignInDto{
    @IsEmail()
    @IsNotEmpty()
    readonly email: string;
    @IsStrongPassword()
    readonly password: string; 
}