import { Controller, Post, Body, Get, Param, Query, Delete, Patch } from "@nestjs/common";
import { HumanCategoryService } from "./human_category.service";
import { CreateHumanCategoryDto } from "./dto/create-human_category.dto";
import { UpdateHumanCategoryDto } from "./dto/update-human_category.dto";

@Controller("human-category")
export class HumanCategoryController {
  constructor(private readonly humanCategoryService: HumanCategoryService) {}

  @Post("create")
  async createHumanCategory(
    @Body() createHumanCategoryDto: CreateHumanCategoryDto
  ) {
    return this.humanCategoryService.createHumanCategory(
      createHumanCategoryDto
    );
  }

  @Get("all")
  async getAllHumanCategory() {
    return this.humanCategoryService.getAllHumanCategory();
  }

  @Get("search")
  async getHumanCategoryByName(@Query("name") name: string) {
    return this.humanCategoryService.getHumanCategoryByName(name);
  }

  @Get(":id")
  async getHumanCategoryById(@Param("id") id: number) {
    return this.humanCategoryService.getHumanCategoryById(id);
  }

  @Delete(":id")
  async deleteHumanCategory(@Param("id") id: number) {
    return this.humanCategoryService.deleteHumanCategory(id);
  }

  @Patch(":id")
  async updateHumanCategory(
    @Param("id") id:number,
    @Body() updateHumanCategoryDto: UpdateHumanCategoryDto
  ){
    return this.humanCategoryService.updateHumanCategory(
      id,
      updateHumanCategoryDto
    )
  }
}
