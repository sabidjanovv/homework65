// import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
// import { Event } from "src/event/models/event.model";
// import { Seat } from "src/seat/models/seat.model";
// import { TicketStatus } from "src/ticket_status/models/ticket_status.model";

// interface ITicketCreationAttr {
//   eventId: number;
//   seatId: number;
//   price: number;
//   service_fee: number;
//   statusId: number;
//   ticket_type: string;
// }
// @Table({ tableName: "ticket" })
// export class Ticket extends Model<Ticket, ITicketCreationAttr> {
//   @Column({
//     type: DataType.INTEGER,
//     autoIncrement: true,
//     primaryKey: true,
//   })
//   id: number;

//   @ForeignKey(()=> Event)
//   @Column({
//     type: DataType.INTEGER,
//     allowNull: false,
//   })
//   eventId: number;
//   @BelongsTo(()=> Event)
//   event: Event;

  // @ForeignKey(()=> Seat)
  // @Column({
  //   type: DataType.INTEGER,
  //   allowNull: false,
  // })
  // seatId: number;
  // @BelongsTo(()=> Seat)
  // seat: Seat;
  
//   @Column({
//     type: DataType.INTEGER,
//     allowNull: false,
//   })
//   price: number;

//   @Column({
//     type: DataType.INTEGER,
//     allowNull: false,
//   })
//   service_fee: number;
  
//   @ForeignKey(()=> TicketStatus)
//   @Column({
//     type: DataType.INTEGER,  // Foreign key va Belong to qoshish kerak
//     allowNull: false,
//   })
//   statusId: number;
//   @BelongsTo(()=> TicketStatus)
//   status: TicketStatus;


// }




import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  HasOne,
  Model,
  Table,
} from "sequelize-typescript";
import { Event } from "../../event/models/event.model";
import { TicketStatus } from "../../ticket_status/models/ticket_status.model";
import { ApiProperty } from "@nestjs/swagger";
import { Seat } from "../../seat/models/seat.model";
import { Cart } from "../../cart/models/cart.model";

interface ITicketCreationAttr {
  eventId: number;
  seatId: number;
  price: number;
  service_fee: number;
  statusId: number;
  ticket_type: string;
}

@Table({ tableName: "tickets" })
export class Ticket extends Model<Ticket, ITicketCreationAttr> {
  @ApiProperty({
    example: 1,
    description: "Unique ID of the ticket (autoIncrement)",
  })
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  id: number;

  @ForeignKey(() => Event)
  @ApiProperty({ example: 1, description: "ID of the event" })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  eventId: number;
  @BelongsTo(() => Event)
  event: Event;

  @ForeignKey(() => Seat)
  @ApiProperty({ example: 1, description: "ID of the seat" })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  seatId: number;
  @BelongsTo(() => Seat)
  seat: Seat;



  @ApiProperty({ example: 100.0, description: "Ticket price" })
  @Column({ type: DataType.FLOAT, allowNull: false })
  price: number;

  @ApiProperty({ example: 10.0, description: "Service fee for the ticket" })
  @Column({ type: DataType.FLOAT, allowNull: false })
  service_fee: number;

  @ForeignKey(() => TicketStatus)
  @ApiProperty({ example: 1, description: "ID of the ticket status" })
  @Column({ type: DataType.INTEGER, allowNull: false })
  statusId: number;

  @BelongsTo(() => TicketStatus)
  status: TicketStatus;

  @ApiProperty({ example: "Standard", description: "Type of the ticket" })
  @Column({ type: DataType.STRING })
  ticket_type: string;

  @HasMany(()=> Cart)
  cart: Cart;
}
