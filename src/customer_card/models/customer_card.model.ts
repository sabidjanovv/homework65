import { ApiProperty } from "@nestjs/swagger";
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { Customer } from "src/customer/models/customer.model";

interface ICustomerCardAttr {
  customerId: number;
  name: string;
  phone: string;
  number: string;
  year: string;
  month: string;
  is_active: boolean;
  is_main: boolean;
}

@Table({ tableName: "customer_card" })
export class CustomerCard extends Model<CustomerCard, ICustomerCardAttr> {
  @ApiProperty({ example: 1, description: "Customer Card ID (autoIncrement)" })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 1, description: "Customer ID foreign key" })
  @ForeignKey(() => Customer)
  @Column({
    type: DataType.INTEGER,
  })
  customerId: number;

  @BelongsTo(() => Customer)
  customer: Customer;

  @ApiProperty({ example: "John Doe", description: "Cardholder name" })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @ApiProperty({ example: "998901234567", description: "Phone number" })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  phone: string;

  @ApiProperty({ example: "1234567812345678", description: "Card number" })
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  number: string;

  @ApiProperty({ example: "25", description: "Expiry year (YY format)" })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  year: string;

  @ApiProperty({ example: "12", description: "Expiry month (MM format)" })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  month: string;

  @ApiProperty({ example: true, description: "Active status" })
  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  is_active: boolean;

  @ApiProperty({ example: true, description: "Main card status" })
  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  is_main: boolean;
}
