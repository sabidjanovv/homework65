import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Ticket } from "../../ticket/models/ticket.model";
import { Customer } from "../../customer/models/customer.model";
import { CartStatus } from "../../cart_status/models/cart_status.model";

interface ICartAttr{
    tickedId: number;
    customerId: number;
    createdAt: string;
    finishedAt: string;
    statusId: number;
}


@Table({ tableName: "cart" })
export class Cart extends Model<Cart, ICartAttr> {
  @ApiProperty({ example: 1, description: "Cart ID (autoIncrement)" })
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @ApiProperty({ example: 1, description: "ID of the ticket" })
  @ForeignKey(()=>Ticket)
  @Column({
    type: DataType.INTEGER,
  })
  ticketId: number;
  @BelongsTo(()=>Ticket)
  ticket: Ticket;


  @ApiProperty({ example: 1, description: "ID of the customer" })
  @ForeignKey(()=>Customer)
  @Column({
    type: DataType.INTEGER,
  })
  customerId: number;
  @BelongsTo(()=>Customer)
  customer: Customer;


  @ApiProperty({ example: new Date(), description: "Date and time of creation" })
  @Column({
    type: DataType.STRING
  })
  createdAt: string;


  @ApiProperty({ example: null, description: "Date and time of finishing" })
  @Column({
    type: DataType.STRING,
  })
  finishedAt: string;


  @ApiProperty({ example: 1, description: "ID of the cart status" })
  @Column({
    type: DataType.INTEGER,
  })
  statusId: number;

}
