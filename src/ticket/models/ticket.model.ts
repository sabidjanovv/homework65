import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Event } from "src/event/models/event.model";
import { Seat } from "src/seat/models/seat.model";
import { TicketStatus } from "src/ticket_status/models/ticket_status.model";

interface ITicketCreationAttr {
  eventId: number;
  seatId: number;
  price: number;
  service_fee: number;
  statusId: number;
  ticket_type: string;
}
@Table({ tableName: "ticket" })
export class Ticket extends Model<Ticket, ITicketCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(()=> Event)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  eventId: number;
  @BelongsTo(()=> Event)
  event: Event;

  @ForeignKey(()=> Seat)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  seatId: number;
  @BelongsTo(()=> Seat)
  seat: Seat;
  
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  price: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  service_fee: number;
  
  @ForeignKey(()=> TicketStatus)
  @Column({
    type: DataType.INTEGER,  // Foreign key va Belong to qoshish kerak
    allowNull: false,
  })
  statusId: number;
  @BelongsTo(()=> TicketStatus)
  status: TicketStatus;


}
