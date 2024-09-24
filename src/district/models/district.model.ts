import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { CustomerAddress } from "src/customer_address/models/customer_address.model";
import { Region } from "src/region/models/region.model";
import { Venue } from "src/venue/models/venue.model";


interface DistrictCreationAttr {
  regionId: number;
  name: string;
}

@Table({ tableName: "district", timestamps: false })
export class District extends Model<District, DistrictCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Region)
  @Column({
    type: DataType.INTEGER,
  })
  regionId: number;

  @Column({
    type: DataType.STRING(),
  })
  name: string;

  @BelongsTo(() => Region)
  region: Region;

  @HasMany(() => Venue)
  venues: Venue[];

  @HasMany(()=> CustomerAddress)
  customerAddresses: CustomerAddress[];
}
