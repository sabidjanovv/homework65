import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { CustomerAddress } from "src/customer_address/models/customer_address.model";
import { CustomerCard } from "src/customer_card/models/customer_card.model";
import { Language } from "src/language/models/language.model";

interface ICustomerAttr {
  first_name: string;
  last_name: string;
  phone: string;
  password: string;
  email: string;
  birth_date: string;
  gender: string;
  languageId: number;
}

@Table({ tableName: "customer" })
export class Customer extends Model<Customer, ICustomerAttr> {
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
  first_name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  last_name: string;
  
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  phone: string;
  
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;
  
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  email: string;
  
  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  birth_date: string;
  
  @Column({
    type: DataType.ENUM("erkak", "ayol"),
    allowNull: false,
  })
  gender: string;
  
  @ForeignKey(()=> Language)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  languageId: number;
  @BelongsTo(()=> Language)
  language: Language;


  @HasMany(()=> CustomerAddress)
  customerAddress: CustomerAddress;

  @HasMany(()=> CustomerCard)
  customerCard: CustomerCard;
}
