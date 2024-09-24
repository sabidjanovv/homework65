import { Injectable } from "@nestjs/common";
import { CreateCountryDto } from "./dto/create-country.dto";
import { UpdateCountryDto } from "./dto/update-country.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Country } from "./models/country.model";

@Injectable()
export class CountryService {
  constructor(@InjectModel(Country) private countryModel: typeof Country) {}
  create(createCountryDto: CreateCountryDto) {
    return this.countryModel.create(createCountryDto);
  }

  findAll() {
    return this.countryModel.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.countryModel.findOne({
      where: { id },
      include: { all: true },
    });
  }

  async update(
    id: number,
    updateCountryDto: UpdateCountryDto
  ): Promise<Country> {
    const Country = await this.countryModel.update(updateCountryDto, {
      where: { id },
      returning: true,
    });
    console.log(Country);
    return Country[1][0];
  }

  remove(id: number): Promise<number> {
    return this.countryModel.destroy({ where: { id } });
  }
}
