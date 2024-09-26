import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from "@nestjs/common";
import { AdminService } from "./admin.service";
import { CreateAdminDto } from "./dto/create-admin.dto";
import { UpdateAdminDto } from "./dto/update-admin.dto";
import { JwtAdminAuthGuard } from "src/guards/jwt-adminAuth.guard";
import { AdminSelfGuard } from "src/guards/adminSelf.guard";
import { AdminCreatorGuard } from "src/guards/adminCreator.guard";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Admin } from "./models/admin.model";

@ApiTags("Adminlar")
@Controller("admin")
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @ApiOperation({ summary: "Yangi admin qo'shish(is_creator yarataoladi)" })
  @ApiResponse({
    status: 201,
    description: "Create Admin",
    type: Admin,
  })
  @UseGuards(JwtAdminAuthGuard, AdminCreatorGuard)
  @Post()
  create(@Body() createAdminDto: CreateAdminDto) {
    return this.adminService.create(createAdminDto);
  }

  @ApiOperation({ summary: "Barcha adminlar ro'yxatini ko'rish(is_creator)" })
  @ApiResponse({
    status: 200,
    description: "Barcha adminlar ro'yxati",
    type: [Admin],
  })
  @UseGuards(JwtAdminAuthGuard, AdminCreatorGuard)
  @Get()
  findAll() {
    return this.adminService.findAll();
  }

  @ApiOperation({
    summary:
      "Foydalanuvchini ID bo'yicha ko'rish(admin faqat o'zini ma'lumotlarini kora oladi)",
  })
  @ApiResponse({
    status: 200,
    description: "Get Admin by ID",
    type: Admin,
  })
  @UseGuards(JwtAdminAuthGuard, AdminSelfGuard)
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.adminService.findOne(+id);
  }

  @ApiOperation({
    summary:
      "Foydalanuvchini ID bo'yicha tahrirlash(is_creator ma'lumotlarini tahrirlay oladi)",
  })
  @ApiResponse({
    status: 200,
    description: "Update Admin by ID",
    type: Admin,
  })
  @UseGuards(JwtAdminAuthGuard, AdminCreatorGuard)
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateAdminDto: UpdateAdminDto) {
    return this.adminService.update(+id, updateAdminDto);
  }

  @ApiOperation({
    summary:
      "Foydalanuvchini ID bo'yicha o'chirish(is_creator ma'lumotlarini o'chiradi)",
  })
  @ApiResponse({
    status: 200,
    description: "Delete Admin by ID",
    type: Admin,
  })
  @UseGuards(JwtAdminAuthGuard, AdminCreatorGuard)
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.adminService.remove(+id);
  }
}
