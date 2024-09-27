import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from "sequelize-typescript";
import { EventType } from "src/event_type/models/event_type.model";
import { HumanCategory } from "src/human_category/models/human_category.model";
import { Language } from "src/language/models/language.model";
import { Ticket } from "src/ticket/models/ticket.model";
import { Venue } from "src/venue/models/venue.model";
import { ApiProperty } from "@nestjs/swagger";

interface IEventCreationAttr {
  name: string;
  photo: string;
  start_date: Date;
  start_time: string;
  finish_date: Date;
  finish_time: string;
  info: string;
  eventTypeId: number;
  humanCategoryId: number;
  venueId: number;
  languageId: number;
  release_date: Date;
}

@Table({ tableName: "events" })
export class Event extends Model<Event, IEventCreationAttr> {
  @ApiProperty({
    example: 1,
    description: "Unique ID of the event (autoIncrement)",
  })
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  id: number;

  @ApiProperty({ example: "Concert", description: "Event name" })
  @Column({ type: DataType.STRING })
  name: string;

  @ApiProperty({
    example: "https://example.com/photo.jpg",
    description: "Event photo URL",
  })
  @Column({ type: DataType.STRING })
  photo: string;

  @ApiProperty({
    example: "2024-09-30",
    description: "Start date of the event",
  })
  @Column({ type: DataType.DATE })
  start_date: Date;

  @ApiProperty({ example: "18:00:00", description: "Start time of the event" })
  @Column({ type: DataType.TIME })
  start_time: string;

  @ApiProperty({
    example: "2024-10-01",
    description: "Finish date of the event",
  })
  @Column({ type: DataType.DATE })
  finish_date: Date;

  @ApiProperty({ example: "20:00:00", description: "Finish time of the event" })
  @Column({ type: DataType.TIME })
  finish_time: string;

  @ApiProperty({
    example: "An exciting concert with famous artists.",
    description: "Event information",
  })
  @Column({ type: DataType.TEXT })
  info: string;

  @ForeignKey(() => EventType)
  @ApiProperty({ example: 1, description: "ID of the event type" })
  @Column({ type: DataType.INTEGER, allowNull: false })
  eventTypeId: number;

  @BelongsTo(() => EventType)
  eventType: EventType;

  @ForeignKey(() => HumanCategory)
  @ApiProperty({ example: 1, description: "ID of the human category" })
  @Column({ type: DataType.INTEGER, allowNull: false })
  humanCategoryId: number;

  @BelongsTo(() => HumanCategory)
  humanCategory: HumanCategory;

  @ForeignKey(() => Venue)
  @ApiProperty({ example: 1, description: "ID of the venue" })
  @Column({ type: DataType.INTEGER, allowNull: false })
  venueId: number;

  @BelongsTo(() => Venue)
  venue: Venue;

  @ForeignKey(() => Language)
  @ApiProperty({ example: 1, description: "ID of the language" })
  @Column({ type: DataType.INTEGER, allowNull: false })
  languageId: number;

  @BelongsTo(() => Language)
  language: Language;

  @ApiProperty({
    example: "2024-09-01",
    description: "Release date of the event",
  })
  @Column({ type: DataType.DATE })
  release_date: Date;

  @HasMany(() => Ticket)
  tickets: Ticket[];
}
