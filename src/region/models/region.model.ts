import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { CustomerAddress } from "src/customer_address/models/customer_address.model";
import { District } from "src/district/models/district.model";
import { Venue } from "src/venue/models/venue.model";


interface RegionCreationAttr {
  name: string;
}

@Table({ tableName: "region" })
export class Region extends Model<Region, RegionCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

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
