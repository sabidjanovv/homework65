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
import { Region } from "src/region/models/region.model";
import { Venue } from "src/venue/models/venue.model";

interface DistrictCreationAttr {
  regionId: number;
  name: string;
}

@Table({ tableName: "district", timestamps: false })
export class District extends Model<District, DistrictCreationAttr> {
  @ApiProperty({
    example: 1,
    description: "Unique ID of the district (autoIncrement)",
  })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Region)
  @ApiProperty({
    example: 1,
    description: "Region ID to which the district belongs",
  })
  @Column({
    type: DataType.INTEGER,
  })
  regionId: number;

  @ApiProperty({
    example: "District Name",
    description: "Name of the district",
  })
  @Column({
    type: DataType.STRING(),
  })
  name: string;

  @BelongsTo(() => Region)
  region: Region;

  @HasMany(() => Venue)
  venues: Venue[];

  @HasMany(() => CustomerAddress)
  customerAddresses: CustomerAddress[];
}
