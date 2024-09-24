import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { Country } from "src/country/models/country.model";
import { Customer } from "src/customer/models/customer.model";
import { District } from "src/district/models/district.model";
import { Region } from "src/region/models/region.model";

interface ICustomerAddressAttr {
  customerId: number;
  name: string;
  countryId: number;
  regionId: number;
  districtId: number;
  street: string;
  house: string;
  flat: string;
  location: string;
  post_index: string;
  info: string;
}

@Table({ tableName: "customer_address" })
export class CustomerAddress extends Model<
  CustomerAddress,
  ICustomerAddressAttr
> {
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
  @BelongsTo(() => Customer)
  customer: Customer;

  @Column({
    type: DataType.STRING,
  })
  name: string;

  @ForeignKey(() => Country)
  @Column({
    type: DataType.INTEGER,
  })
  countryId: number;
  @BelongsTo(() => Country)
  country: Country;

  @ForeignKey(() => Region)
  @Column({
    type: DataType.INTEGER,
  })
  regionId: number;
  @BelongsTo(() => Region)
  region: Region;

  @ForeignKey(() => District)
  @Column({
    type: DataType.INTEGER,
  })
  districtId: number;
  @BelongsTo(() => District)
  district: District;

  @Column({
    type: DataType.STRING,
  })
  street: string;

  @Column({
    type: DataType.STRING,
  })
  house: string;

  @Column({
    type: DataType.STRING,
  })
  flat: string;

  @Column({
    type: DataType.STRING,
  })
  location: string;

  @Column({
    type: DataType.STRING,
  })
  post_index: string;

  @Column({
    type: DataType.TEXT,
  })
  info: string;
}
