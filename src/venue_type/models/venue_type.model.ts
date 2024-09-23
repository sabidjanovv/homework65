import { Table, Column, DataType, Model, BelongsToMany } from "sequelize-typescript";
import { Venue } from "src/venue/models/venue.model";
import { VenueVenueType } from "src/venue_venue_type/models/venue_venue_type.model";

interface VenueTypeAttr {
  name: string;
}

@Table({ tableName: "venue_type" })
export class VenueType extends Model<VenueType, VenueTypeAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
    unique: true,
  })
  name: string;



  @BelongsToMany(()=>Venue, ()=> VenueVenueType)
  venues: Venue[];
}
