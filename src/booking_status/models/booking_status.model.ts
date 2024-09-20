import { Column, DataType, Model, Table } from "sequelize-typescript";

interface BookingStatusCreationAttr {
  name: string;
}
@Table({ tableName: "bookingStatus", timestamps: false })
export class BookingStatus extends Model<BookingStatus, BookingStatusCreationAttr> {
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
  name: string;
}
