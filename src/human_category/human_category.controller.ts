import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Query,
  Delete,
  Patch,
} from "@nestjs/common";
import { HumanCategoryService } from "./human_category.service";
import { CreateHumanCategoryDto } from "./dto/create-human_category.dto";
import { UpdateHumanCategoryDto } from "./dto/update-human_category.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { HumanCategory } from "./models/human_category.model";

@ApiTags("Human Categories")
@Controller("human-category")
export class HumanCategoryController {
  constructor(private readonly humanCategoryService: HumanCategoryService) {}

  @ApiOperation({ summary: "Yangi kategoriya yaratish" })
  @ApiResponse({
    status: 201,
    description: "Yangi kategoriya yaratildi",
    type: HumanCategory,
  })
  @Post("create")
  async createHumanCategory(
    @Body() createHumanCategoryDto: CreateHumanCategoryDto
  ) {
    return this.humanCategoryService.createHumanCategory(
      createHumanCategoryDto
    );
  }

  @ApiOperation({ summary: "Barcha kategoriyalarni ko'rish" })
  @ApiResponse({
    status: 200,
    description: "Kategoriyalar ro'yxati",
    type: [HumanCategory],
  })
  @Get("all")
  async getAllHumanCategory() {
    return this.humanCategoryService.getAllHumanCategory();
  }

  @ApiOperation({ summary: "Kategoriya nomi bo'yicha qidirish" })
  @ApiResponse({
    status: 200,
    description: "Kategoriya topildi",
    type: HumanCategory,
  })
  @Get("search")
  async getHumanCategoryByName(@Query("name") name: string) {
    return this.humanCategoryService.getHumanCategoryByName(name);
  }

  @ApiOperation({ summary: "ID bo'yicha kategoriya topish" })
  @ApiResponse({
    status: 200,
    description: "Kategoriya topildi",
    type: HumanCategory,
  })
  @Get(":id")
  async getHumanCategoryById(@Param("id") id: number) {
    return this.humanCategoryService.getHumanCategoryById(id);
  }

  @ApiOperation({ summary: "ID orqali kategoriyani o'chirish" })
  @ApiResponse({
    status: 200,
    description: "Kategoriya o'chirildi",
    type: HumanCategory,
  })
  @Delete(":id")
  async deleteHumanCategory(@Param("id") id: number) {
    return this.humanCategoryService.deleteHumanCategory(id);
  }

  @ApiOperation({ summary: "ID orqali kategoriyani yangilash" })
  @ApiResponse({
    status: 200,
    description: "Kategoriya yangilandi",
    type: HumanCategory,
  })
  @Patch(":id")
  async updateHumanCategory(
    @Param("id") id: number,
    @Body() updateHumanCategoryDto: UpdateHumanCategoryDto
  ) {
    return this.humanCategoryService.updateHumanCategory(
      id,
      updateHumanCategoryDto
    );
  }
}
