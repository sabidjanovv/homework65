import { ApiOperation, ApiProperty } from "@nestjs/swagger";
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { Venue } from "src/venue/models/venue.model";

interface VenuePhotoCreationAttr {
  venueId: number;
  url: string;
}

@Table({ tableName: "venue_photo", timestamps: false })
export class VenuePhoto extends Model<VenuePhoto, VenuePhotoCreationAttr> {
  @ApiProperty({
    example: 1,
    description: "Rasmlarning unical ID raqami (autoIncrement)",
  })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: 1,
    description: "Rasm tegishli bo'lgan VenueId",
  })
  @ForeignKey(() => Venue)
  @Column({
    type: DataType.INTEGER,
  })
  venueId: number;

  @ApiProperty({
    example: "image1.jpg",
    description: "Rasmning URL",
  })
  @Column({
    type: DataType.STRING(),
  })
  url: string;

  @BelongsTo(() => Venue)
  venue: Venue;
}
