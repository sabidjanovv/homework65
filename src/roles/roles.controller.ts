import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { RolesService } from "./roles.service";
import { CreateRoleDto } from "./dto/create-role.dto";
import { UpdateRoleDto } from "./dto/update-role.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Roles } from "./models/roles.model";


@ApiTags("Foydalanuvchi rollari")
@Controller("roles")
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @ApiOperation({ summary: "Yangi ROLE qo'shish" })
  @ApiResponse({
    status: 201,
    description: "Create Role",
    type: Roles,
  })
  @Post("create")
  create(@Body() createRoleDto: CreateRoleDto) {
    return this.rolesService.create(createRoleDto);
  }

  @ApiOperation({ summary: "Barcha ROLElarni ko'rish" })
  @ApiResponse({
    status: 200,
    description: "List of Roles",
    type: [Roles],
  })
  @Get("all")
  findAll() {
    return this.rolesService.findAll();
  }

  @ApiOperation({ summary: "Foydalanuvchini ROLE bo'yicha ko'rish" })
  @ApiResponse({
    status: 200,
    description: "Get Role by ROLE",
    type: Roles,
  })
  @Get("/value/:value")
  findRoleByValue(@Param("value") value: string) {
    return this.rolesService.findRoleByValue(value);
  }

  @ApiOperation({ summary: "ROLEni ID orqali ko'rish" })
  @ApiResponse({
    status: 200,
    description: "Get Role by ID",
    type: Roles,
  })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.rolesService.findOne(+id);
  }

  @ApiOperation({ summary: "ROLeni ID orqali tahrirlash" })
  @ApiResponse({
    status: 200,
    description: "Update Role by ID",
    type: Roles,
  })
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateRoleDto: UpdateRoleDto) {
    return this.rolesService.update(+id, updateRoleDto);
  }

  @ApiOperation({ summary: "ROLeni ID orqali o'chirish" })
  @ApiResponse({
    status: 200,
    description: "Delete Role by ID",
    type: Roles,
  })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.rolesService.remove(+id);
  }
}
