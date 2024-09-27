import { ApiProperty } from "@nestjs/swagger";
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from "sequelize-typescript";
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
  @ApiProperty({
    example: 1,
    description: "Foydalanuvchining unical ID raqami (autoIncrement)",
  })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: "John",
    description: "Foydalanuvchining ismi",
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  first_name: string;

  @ApiProperty({
    example: "Doe",
    description: "Foydalanuvchining familiyasi",
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  last_name: string;

  @ApiProperty({
    example: "+998901234567",
    description: "Foydalanuvchining telefon raqami",
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  phone: string;

  @ApiProperty({
    example: "pass123",
    description: "Foydalanuvchining paroli",
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @ApiProperty({
    example: "john.doe@gmail.com",
    description: "Foydalanuvchining emaili",
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  email: string;

  @ApiProperty({
    example: "1990-01-01",
    description: "Foydalanuvchining tug'ilgan sanasi",
  })
  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  birth_date: string;

  @ApiProperty({
    example: "erkak",
    description: "Foydalanuvchining jinsi",
  })
  @Column({
    type: DataType.ENUM("erkak", "ayol"),
    allowNull: false,
  })
  gender: string;

  @ForeignKey(() => Language)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  languageId: number;

  @BelongsTo(() => Language)
  language: Language;

  @HasMany(() => CustomerAddress)
  customerAddress: CustomerAddress;

  @HasMany(() => CustomerCard)
  customerCard: CustomerCard;
}
