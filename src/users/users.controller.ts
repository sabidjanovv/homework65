import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AddRemoveRoleDto } from './dto/add-remove-role.dto';
import { ActivateUserDto } from './dto/activate-user.dto';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { SelfGuard } from 'src/guards/self.guard';
import { Roles } from 'src/decorator/roles-auth.decorator';
import { RolesGuard } from 'src/guards/roles.guard';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './models/user.model';


@ApiTags("Foydalanuvchilar")
@Roles("ADMIN", "SUPERADMIN")
@UseGuards(RolesGuard)
@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post("create")
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @ApiOperation({ summary: "Barcha foydalanuvchini ro'yxatini ko'rish" })
  @ApiResponse({
    status: 200,
    description: "List of users",
    type: [User],
  })
  @UseGuards(JwtAuthGuard)
  @Get("all")
  findAll() {
    return this.usersService.findAll();
  }

  @ApiOperation({ summary: "Foydalanuvchini ID bo'yicha ko'rish" })
  @ApiResponse({
    status: 200,
    description: "Get User by ID",
    type: User,
  })
  @UseGuards(SelfGuard)
  @UseGuards(JwtAuthGuard)
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.usersService.remove(+id);
  }

  @Roles("ADMIN", "SUPERADMIN")
  @UseGuards(RolesGuard)
  @HttpCode(200)
  @Post("add_role")
  async addRole(@Body() addRemoveRoleDto: AddRemoveRoleDto) {
    return this.usersService.addRole(addRemoveRoleDto);
  }

  @Roles("SUPERADMIN")
  @UseGuards(RolesGuard)
  @HttpCode(200)
  @Post("remove_role")
  async removeRole(@Body() addRemoveRoleDto: AddRemoveRoleDto) {
    return this.usersService.removeRole(addRemoveRoleDto);
  }

  @Roles("SUPERADMIN")
  @UseGuards(RolesGuard)
  @HttpCode(200)
  @Post("activate")
  async activateUser(@Body() activateUserDto: ActivateUserDto) {
    return this.usersService.activateUser(activateUserDto);
  }
}
