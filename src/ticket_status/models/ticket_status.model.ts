import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Ticket } from "src/ticket/models/ticket.model";


interface TicketStatusCreationAttr{
    name: string;
}
@Table({tableName: "ticket_status"})
export class TicketStatus extends Model<TicketStatus, TicketStatusCreationAttr>{
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @Column({
        type: DataType.STRING(),
    })
    name: string;

    @HasMany(() => Ticket)
    tickets: Ticket[];
}
