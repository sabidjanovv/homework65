import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from "sequelize-typescript";
import { Event } from "src/event/models/event.model";
import { ApiProperty } from "@nestjs/swagger";

interface IEventTypeCreationAttr {
  name: string;
}

@Table({ tableName: "event_type" })
export class EventType extends Model<EventType, IEventTypeCreationAttr> {
  @ApiProperty({ example: 1, description: "Event Type ID" })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: "Concert", description: "Event Type Name" })
  @Column({
    type: DataType.STRING(),
    allowNull: false,
  })
  name: string;

  @ApiProperty({
    example: 2,
    description: "Parent Event Type ID",
    required: false,
  })
  @ForeignKey(() => EventType)
  @Column({
    type: DataType.INTEGER(),
  })
  parent_event_type_id: number;

  @BelongsTo(() => EventType)
  parent_event_type: EventType;

  @HasMany(() => Event)
  events: Event[];
}
