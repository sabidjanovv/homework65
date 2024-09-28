import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Customer } from "../../customer/models/customer.model";
import { Event } from "../../event/models/event.model";

interface LanguageCreationAttr {
  name: string;
}

@Table({ tableName: "language", timestamps: false })
export class Language extends Model<Language, LanguageCreationAttr> {
  @ApiProperty({
    example: 1,
    description: "Unique ID of the language (autoIncrement)",
  })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: "English",
    description: "Name of the language",
  })
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
