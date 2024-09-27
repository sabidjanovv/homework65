import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { RegionService } from "./region.service";
import { CreateRegionDto } from "./dto/create-region.dto";
import { UpdateRegionDto } from "./dto/update-region.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Region } from "./models/region.model";

@ApiTags("Mintaqalar")
@Controller("region")
export class RegionController {
  constructor(private readonly regionService: RegionService) {}

  @ApiOperation({ summary: "Yangi mintaqa qo'shish" })
  @ApiResponse({
    status: 201,
    description: "Mintaqa muvaffaqiyatli yaratildi",
    type: Region,
  })
  @Post()
  create(@Body() createRegionDto: CreateRegionDto) {
    return this.regionService.create(createRegionDto);
  }

  @ApiOperation({ summary: "Barcha mintaqalar ro'yxatini ko'rish" })
  @ApiResponse({
    status: 200,
    description: "Barcha mintaqalar",
    type: [Region],
  })
  @Get()
  findAll() {
    return this.regionService.findAll();
  }

  @ApiOperation({ summary: "Mintaqani ID bo'yicha ko'rish" })
  @ApiResponse({
    status: 200,
    description: "Mintaqa ID bo'yicha",
    type: Region,
  })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.regionService.findOne(+id);
  }

  @ApiOperation({ summary: "Mintaqani ID bo'yicha tahrirlash" })
  @ApiResponse({
    status: 200,
    description: "Mintaqa muvaffaqiyatli tahrirlandi",
    type: Region,
  })
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateRegionDto: UpdateRegionDto) {
    return this.regionService.update(+id, updateRegionDto);
  }

  @ApiOperation({ summary: "Mintaqani ID bo'yicha o'chirish" })
  @ApiResponse({
    status: 200,
    description: "Mintaqa muvaffaqiyatli o'chirildi",
    type: Region,
  })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.regionService.remove(+id);
  }
}
