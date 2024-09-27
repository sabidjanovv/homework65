import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { CustomerAddress } from "src/customer_address/models/customer_address.model";

interface ICountryAttr {
  name: string;
}

@Table({ tableName: "country" })
export class Country extends Model<Country, ICountryAttr> {
  @ApiProperty({
    example: 1,
    description: "Mamlakatning unikal ID raqami (autoIncrement)",
  })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: "Uzbekistan",
    description: "Mamlakat nomi",
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @HasMany(() => CustomerAddress)
  customerAddress: CustomerAddress[];
}
