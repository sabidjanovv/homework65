import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Event } from "src/event/models/event.model";

interface IEventTypeCreationAttr {
  name: string;
}

@Table({ tableName: "event_type" })
export class EventType extends Model<EventType, IEventTypeCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING(),
    allowNull: false,
  })
  name: string;

  @ForeignKey(()=> EventType)
  @Column({
    type: DataType.INTEGER(),
  })
  parent_event_type_id: number;

  @BelongsTo(()=> EventType)
  parent_event_type: EventType;

  @HasMany(() => Event)
  events: Event[];
}
