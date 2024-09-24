import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
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
export class CustomerCard extends Model<CustomerCard, ICustomerCardAttr>{
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Customer)
  @Column({
    type: DataType.INTEGER,
  })
  customerId: number;
  @BelongsTo(()=>Customer)
  customer: Customer;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  phone: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  number: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  year: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  month: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  is_active: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  is_main: boolean;
}
