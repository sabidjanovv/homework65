import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class AdminSignInDto{
    @ApiProperty({example:"admin1", description:"Admin logini"})
    @IsNotEmpty()
    readonly login:string;

    @ApiProperty({example:"password123", description:"Admin parolni"})
    @IsNotEmpty()
    readonly password: string; 
}