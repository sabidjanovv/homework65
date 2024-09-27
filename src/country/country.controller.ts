import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { CountryService } from "./country.service";
import { CreateCountryDto } from "./dto/create-country.dto";
import { UpdateCountryDto } from "./dto/update-country.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Country } from "./models/country.model";

@ApiTags("Mamlakatlar")
@Controller("country")
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @ApiOperation({ summary: "Yangi mamlakat qo'shish" })
  @ApiResponse({
    status: 201,
    description: "Yaratilgan mamlakat",
    type: Country,
  })
  @Post()
  create(@Body() createCountryDto: CreateCountryDto) {
    return this.countryService.create(createCountryDto);
  }

  @ApiOperation({ summary: "Barcha mamlakatlarni olish" })
  @ApiResponse({
    status: 200,
    description: "Mamlakatlar ro'yxati",
    type: [Country],
  })
  @Get()
  findAll() {
    return this.countryService.findAll();
  }

  @ApiOperation({ summary: "ID orqali mamlakatni olish" })
  @ApiResponse({
    status: 200,
    description: "ID bo'yicha mamlakat",
    type: Country,
  })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.countryService.findOne(+id);
  }

  @ApiOperation({ summary: "Mamlakat ma'lumotlarini yangilash" })
  @ApiResponse({
    status: 200,
    description: "Yangilangan mamlakat ma'lumotlari",
    type: Country,
  })
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateCountryDto: UpdateCountryDto) {
    return this.countryService.update(+id, updateCountryDto);
  }

  @ApiOperation({ summary: "Mamlakatni o'chirish" })
  @ApiResponse({
    status: 200,
    description: "O'chirilgan mamlakat",
    type: Country,
  })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.countryService.remove(+id);
  }
}
