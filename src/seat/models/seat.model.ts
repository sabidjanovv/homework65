import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { SeatType } from "src/seat_type/models/seat_type.model";
import { Venue } from "src/venue/models/venue.model";


interface SeatCreationAttr {
  sector: string;
  row_number: number;
  number: number;
  locationInSchema: string;
  venueId: number;
  seatTypeId: number;
}
@Table({ tableName: "seat" })
export class Seat extends Model<Seat, SeatCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  sector: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  row_number: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  number: number;

  @ForeignKey(() => Venue)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  venueId: number;
  @BelongsTo(() => Venue)
  venue: Venue;

  @ForeignKey(() => SeatType)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  seatTypeId: number;
  @BelongsTo(() => SeatType)
  seatType: SeatType;

  @Column({
    type: DataType.STRING,
  })
  locationInSchema: string;
}
