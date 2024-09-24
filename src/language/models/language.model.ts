import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Customer } from "src/customer/models/customer.model";
import { Event } from "src/event/models/event.model";


interface LanguageCreationAttr{
    name: string;
}
@Table({ tableName: "language", timestamps: false })
export class Language extends Model<Language, LanguageCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  name: string;

  @HasMany(() => Event)
  events: Event[];

  @HasMany(() => Customer)
  customers: Customer[];
}
