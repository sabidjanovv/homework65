import {
  Table,
  Column,
  DataType,
  Model,
  BelongsToMany,
} from "sequelize-typescript";
import { Venue } from "../../venue/models/venue.model";
import { VenueVenueType } from "../../venue_venue_type/models/venue_venue_type.model";
import { ApiProperty } from "@nestjs/swagger";

interface VenueTypeAttr {
  name: string;
}

@Table({ tableName: "venue_type" })
export class VenueType extends Model<VenueType, VenueTypeAttr> {
  @ApiProperty({
    example: 1,
    description: "Unique ID of the venue type (autoIncrement)",
  })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: "Concert Hall",
    description: "Name of the venue type",
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  name: string;

  @BelongsToMany(() => Venue, () => VenueVenueType)
  venues: Venue[];
}
