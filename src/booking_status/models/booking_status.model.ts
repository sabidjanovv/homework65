import { Column, DataType, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";

interface BookingStatusCreationAttr {
  name: string;
}

@Table({ tableName: "bookingStatus", timestamps: false })
export class BookingStatus extends Model<
  BookingStatus,
  BookingStatusCreationAttr
> {
  @ApiProperty({
    example: 1,
    description: "Unique ID of the booking status (autoIncrement)",
  })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: "Confirmed",
    description: "Status of the booking",
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;
}
