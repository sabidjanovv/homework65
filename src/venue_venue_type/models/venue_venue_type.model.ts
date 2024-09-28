import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { Venue } from "../../venue/models/venue.model";
import { VenueType } from "../../venue_type/models/venue_type.model";
import { ApiProperty } from "@nestjs/swagger";

interface IVenueVenueTypeCreationAttr {
  venueId: number;
  venueTypeId: number;
}

@Table({ tableName: "venue_venue_type", timestamps: false })
export class VenueVenueType extends Model<
  VenueVenueType,
  IVenueVenueTypeCreationAttr
> {
  @ApiProperty({ example: 1, description: "Venue ID" })
  @ForeignKey(() => Venue)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  venueId: number;

  @ApiProperty({ example: 2, description: "Venue Type ID" })
  @ForeignKey(() => VenueType)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  venueTypeId: number;

  @BelongsTo(() => Venue)
  venue: Venue;

  @BelongsTo(() => VenueType)
  venueType: VenueType;
}
