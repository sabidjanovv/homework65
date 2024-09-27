import { ApiProperty } from "@nestjs/swagger";

export class CreateEventDto {
  @ApiProperty({ example: "Concert", description: "Event name" })
  name: string;

  @ApiProperty({
    example: "https://example.com/photo.jpg",
    description: "Event photo URL",
  })
  photo: string;

  @ApiProperty({
    example: "2024-09-30",
    description: "Start date of the event (YYYY-MM-DD)",
  })
  start_date: Date;

  @ApiProperty({
    example: "18:00:00",
    description: "Start time of the event (HH:mm:ss)",
  })
  start_time: string;

  @ApiProperty({
    example: "2024-10-01",
    description: "Finish date of the event (YYYY-MM-DD)",
  })
  finish_date: Date;

  @ApiProperty({
    example: "20:00:00",
    description: "Finish time of the event (HH:mm:ss)",
  })
  finish_time: string;

  @ApiProperty({
    example: "An exciting concert with famous artists.",
    description: "Event information",
  })
  info: string;

  @ApiProperty({ example: 1, description: "ID of the event type" })
  eventTypeId: number;

  @ApiProperty({ example: 1, description: "ID of the human category" })
  humanCategoryId: number;

  @ApiProperty({ example: 1, description: "ID of the venue" })
  venueId: number;

  @ApiProperty({ example: 1, description: "ID of the language" })
  languageId: number;

  @ApiProperty({
    example: "2024-09-01",
    description: "Release date of the event (YYYY-MM-DD)",
  })
  release_date: Date;
}
