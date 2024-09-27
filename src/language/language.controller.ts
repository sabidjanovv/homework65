import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { LanguageService } from "./language.service";
import { CreateLanguageDto } from "./dto/create-language.dto";
import { UpdateLanguageDto } from "./dto/update-language.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Language } from "./models/language.model";

@ApiTags("Language Management")
@Controller("language")
export class LanguageController {
  constructor(private readonly languageService: LanguageService) {}

  @ApiOperation({ summary: "Create a new language" })
  @ApiResponse({
    status: 201,
    description: "Language successfully created",
    type: Language,
  })
  @Post()
  create(@Body() createLanguageDto: CreateLanguageDto) {
    return this.languageService.create(createLanguageDto);
  }

  @ApiOperation({ summary: "Get all languages" })
  @ApiResponse({
    status: 200,
    description: "List of all languages",
    type: [Language],
  })
  @Get()
  findAll() {
    return this.languageService.findAll();
  }

  @ApiOperation({ summary: "Get language by ID" })
  @ApiResponse({
    status: 200,
    description: "Language details by ID",
    type: Language,
  })
  @Get(":id")
  findOne(@Param("id") id: number) {
    return this.languageService.findOne(id);
  }

  @ApiOperation({ summary: "Update language by ID" })
  @ApiResponse({
    status: 200,
    description: "Language successfully updated",
    type: Language,
  })
  @Patch(":id")
  update(
    @Param("id") id: number,
    @Body() updateLanguageDto: UpdateLanguageDto
  ) {
    return this.languageService.update(id, updateLanguageDto);
  }

  @ApiOperation({ summary: "Delete language by ID" })
  @ApiResponse({
    status: 200,
    description: "Language successfully deleted",
    type: Language,
  })
  @Delete(":id")
  remove(@Param("id") id: number) {
    return this.languageService.remove(id);
  }
}
