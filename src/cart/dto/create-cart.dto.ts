import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateCartDto {
  @ApiProperty({ example: 1, description: "Chipta ID raqami" })
  ticketId: number;

  @ApiProperty({
    example: 1,
    description: "Foydalanuvchining unical ID raqami (customer)",
  })
  @IsNumber()
  @IsNotEmpty()
  customerId: number;

  @ApiProperty({ example: new Date(), description: "Yaratilgan sanasi" })
  createdAt: string;

  @ApiProperty({ example: new Date(), description: "Tugatilgan sanasi" })
  finishedAt: string;

  @ApiProperty({
    example: 1,
    description: "Qoshilgan status ID raqami",
  })
  @IsNumber()
  @IsNotEmpty()
  statusId:number
}
