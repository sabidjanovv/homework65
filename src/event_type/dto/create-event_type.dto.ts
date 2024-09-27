import { ApiProperty } from "@nestjs/swagger";

export class CreateEventTypeDto {
  @ApiProperty({ example: "Concert", description: "Event Type Name" })
  name: string;

  @ApiProperty({
    example: 1,
    description: "Parent Event Type ID"
  })
  parent_event_type_id?: number;
}
