import { Column, DataType, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";

interface CartStatusCreationAttr {
  name: string;
}

@Table({ tableName: "cartStatus", timestamps: false })
export class CartStatus extends Model<CartStatus, CartStatusCreationAttr> {
  @ApiProperty({
    example: 1,
    description: "Unique ID of the cart status (autoIncrement)",
  })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: "Active",
    description: "Status of the cart",
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;
}
