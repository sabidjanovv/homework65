import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { Country } from "../../country/models/country.model";
import { Customer } from "../../customer/models/customer.model";
import { District } from "../../district/models/district.model";
import { Region } from "../../region/models/region.model";

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
  @ApiProperty({
    example: 1,
    description: "Unique ID for the customer address (auto-increment)",
  })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 1, description: "Customer ID" })
  @ForeignKey(() => Customer)
  @Column({ type: DataType.INTEGER })
  customerId: number;
  @BelongsTo(() => Customer)
  customer: Customer;

  @ApiProperty({ example: "Home", description: "Address name" })
  @Column({ type: DataType.STRING })
  name: string;

  @ApiProperty({ example: 1, description: "Country ID" })
  @ForeignKey(() => Country)
  @Column({ type: DataType.INTEGER })
  countryId: number;
  @BelongsTo(() => Country)
  country: Country;

  @ApiProperty({ example: 2, description: "Region ID" })
  @ForeignKey(() => Region)
  @Column({ type: DataType.INTEGER })
  regionId: number;
  @BelongsTo(() => Region)
  region: Region;

  @ApiProperty({ example: 3, description: "District ID" })
  @ForeignKey(() => District)
  @Column({ type: DataType.INTEGER })
  districtId: number;
  @BelongsTo(() => District)
  district: District;

  @ApiProperty({ example: "Main Street", description: "Street name" })
  @Column({ type: DataType.STRING })
  street: string;

  @ApiProperty({ example: "15", description: "House number" })
  @Column({ type: DataType.STRING })
  house: string;

  @ApiProperty({ example: "45A", description: "Flat number" })
  @Column({ type: DataType.STRING })
  flat: string;

  @ApiProperty({
    example: "41.40338, 2.17403",
    description: "Geolocation coordinates",
  })
  @Column({ type: DataType.STRING })
  location: string;

  @ApiProperty({ example: "12345", description: "Postal code" })
  @Column({ type: DataType.STRING })
  post_index: string;

  @ApiProperty({
    example: "Near central park",
    description: "Additional information",
  })
  @Column({ type: DataType.TEXT })
  info: string;
}
