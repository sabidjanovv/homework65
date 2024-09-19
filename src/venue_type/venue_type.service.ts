import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { VenueType } from "./models/venue_type.model";
import { CreateVenueTypeDto } from "./dto/create-venue_type.dto";
import { UpdateVenueTypeDto } from "./dto/update-venue_type.dto";

@Injectable()
export class VenueTypeService {
  constructor(@InjectModel(VenueType) private venueTypeModel: typeof VenueType) {}

  async createVenueType(
    createVenueTypeDto: CreateVenueTypeDto
  ): Promise<VenueType> {
    const Venue_type = await this.venueTypeModel.create(createVenueTypeDto);
    return Venue_type;
  }

  async getAllVenueType(): Promise<VenueType[]> {
    return this.venueTypeModel.findAll();
  }

  async getVenueTypeById(id: number): Promise<VenueType> {
    return this.venueTypeModel.findByPk(id);
  }

  async getVenueTypeByName(name: string): Promise<VenueType> {
    return this.venueTypeModel.findOne({ where: { name } });
  }

  async deleteVenueType(id: number): Promise<number> {
    return this.venueTypeModel.destroy({ where: { id } });
  }

  async updateVenueType(
    id: number,
    updateVenueTypeDto: UpdateVenueTypeDto
  ): Promise<VenueType> {
    const Venue_type = await this.venueTypeModel.update(updateVenueTypeDto, {
      where: { id },
      returning: true,
    });
    console.log(Venue_type);
    return Venue_type[1][0];
  }
}
