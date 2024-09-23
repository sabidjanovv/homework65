import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { EventType } from "src/event_type/models/event_type.model";
import { HumanCategory } from "src/human_category/models/human_category.model";
import { Language } from "src/language/models/language.model";
import { Ticket } from "src/ticket/models/ticket.model";
import { Venue } from "src/venue/models/venue.model";

interface IEventCreationAttr{
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
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
  })
  name: string;

  @Column({
    type: DataType.STRING,
  })
  photo: string;

  @Column({
    type: DataType.DATE,
  })
  start_date: Date;

  @Column({
    type: DataType.TIME,
  })
  start_time: string;

  @Column({
    type: DataType.DATE,
  })
  finish_date: Date;

  @Column({
    type: DataType.TIME,
  })
  finish_time: string;

  @Column({
    type: DataType.TEXT,
  })
  info: string;

  @ForeignKey(()=> EventType)
  @Column({
      type: DataType.INTEGER, 
      allowNull: false
    })
  eventTypeId: number;
  @BelongsTo(() => EventType)
  eventType: EventType;

  @ForeignKey(() => HumanCategory)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  humanCategoryId: number;
  @BelongsTo(() => HumanCategory)
  humanCategory: HumanCategory;

  @ForeignKey(() => Venue)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  venueId: number;
  @BelongsTo(() => Venue)
  venue: Venue;

  @ForeignKey(() => Language)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  languageId: number;
  @BelongsTo(() => Language)
  language: Language;

  @Column({
    type: DataType.DATE,
  })
  release_date: Date;

  @HasMany(()=> Ticket)
  tickets: Ticket[];
}
