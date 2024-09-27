import { ApiProperty } from "@nestjs/swagger";

export class CreateLanguageDto {
  @ApiProperty({ example: "English", description: "Name of the language" })
  name: string;
}
