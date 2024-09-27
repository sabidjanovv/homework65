import { ApiProperty } from "@nestjs/swagger";

export class CreateSeatTypeDto {
  @ApiProperty({ example: "VIP", description: "O'rin turining nomi" })
  name: string;
}
