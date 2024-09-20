import { Column, DataType, Model, Table } from "sequelize-typescript";

interface CartStatusCreationAttr {
  name: string;
}
@Table({ tableName: "cartStatus", timestamps: false })
export class CartStatus extends Model<CartStatus, CartStatusCreationAttr> {
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
