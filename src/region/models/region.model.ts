import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { CustomerAddress } from "../../customer_address/models/customer_address.model";
import { District } from "../../district/models/district.model";
import { Venue } from "../../venue/models/venue.model";
import { ApiProperty } from "@nestjs/swagger";

interface RegionCreationAttr {
  name: string;
}

@Table({ tableName: "region" })
export class Region extends Model<Region, RegionCreationAttr> {
  @ApiProperty({
    example: 1,
    description: "Mintaqaning unikal ID raqami (autoIncrement)",
  })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: "Toshkent",
    description: "Mintaqaning nomi",
  })
  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  name: string;

  @HasMany(() => District)
  districts: District[];

  @HasMany(() => Venue)
  venue_photos: Venue[];

  @HasMany(() => CustomerAddress)
  customerAddresses: CustomerAddress[];
}
