import { ApiProperty } from "@nestjs/swagger";
import { Table, Column, Model, DataType, HasMany, ForeignKey, BelongsTo, BelongsToMany } from "sequelize-typescript";
import { District } from "../../district/models/district.model";
import { Event } from "../../event/models/event.model";
import { Region } from "../../region/models/region.model";
import { Seat } from "../../seat/models/seat.model";
import { VenuePhoto } from "../../venue_photo/models/venue_photo.model";
import { VenueType } from "../../venue_type/models/venue_type.model";
import { VenueVenueType } from "../../venue_venue_type/models/venue_venue_type.model";

interface VenueCreationAttr{
    name: string;
    address: string;
    location: string;
    site: string;
    phone: string;
    regionId:number;
    districtId:number;
}

@Table({ tableName: "venue", timestamps: false })
export class Venue extends Model<Venue, VenueCreationAttr> {
  @ApiProperty({
    example: 1,
    description: "Venuening unical ID raqami (autoIncrement)",
  })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: "Venue 1",
    description: "Venune nomi",
  })
  @Column({
    type: DataType.STRING(),
    allowNull: false,
  })
  name: string;

  @ApiProperty({
    example: "Venue 1 address",
    description: "Venune manzilasi",
  })
  @Column({
    type: DataType.STRING(),
  })
  address: string;

  @ApiProperty({
    example: "Venue 1 location",
    description: "Venune manzilining joylashuvi",
  })
  @Column({
    type: DataType.STRING(),
  })
  location: string;

  @ApiProperty({
    example: "Venue 1 site",
    description: "Venune elektron sayiti",
  })
  @Column({
    type: DataType.STRING(),
  })
  site: string;

  @ApiProperty({
    example: "Venue 1 phone",
    description: "Venune telefon raqami",
  })
  @Column({
    type: DataType.STRING(),
  })
  phone: string;

  @ApiProperty({
    example: "[123.85233.9845, 1236.987145.98426]",
    description: "Venueni joylashuvi",
  })
  @Column({
    type: DataType.ARRAY(DataType.STRING),
  })
  schema: string[];

  @ApiProperty({
    example: 1,
    description: "Venune boshqa regionning unical ID raqami",
  })
  @ForeignKey(() => Region)
  @Column({
    type: DataType.INTEGER,
  })
  regionId: number;
  @BelongsTo(() => Region)
  region: Region;

  @ApiProperty({
    example: 1,
    description: "District(tuman) ID raqami",
  })
  @ForeignKey(() => District)
  @Column({
    type: DataType.INTEGER,
  })
  districtId: number;
  @BelongsTo(() => District)
  district: District;

  @HasMany(() => VenuePhoto)
  venue_photos: VenuePhoto[];

  @HasMany(() => Seat)
  seats: Seat[];

  @BelongsToMany(() => VenueType, () => VenueVenueType)
  venue_types: VenueType[];

  @HasMany(() => Event)
  events: Event[];
}
