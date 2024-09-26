import { Body, Controller, HttpCode, HttpStatus, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { SignInDto } from './dto/signin.dto';
import { CreateAdminDto } from "src/admin/dto/create-admin.dto";
import { AdminSignInDto } from "./dto/adminSignin.dto";
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAdminAuthGuard } from 'src/guards/jwt-adminAuth.guard';
import { AdminCreatorGuard } from 'src/guards/adminCreator.guard';
import { AdminSelfGuard } from 'src/guards/adminSelf.guard';


@ApiTags("AUTH")
@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: "Yangi foydalanuvchini ro'yxattan o'tkazish" })
  @ApiResponse({
    status: 201,
    description: "Ro'yxatdan o'tgan foydalanuvchi",
    type: String,
  })
  @Post("signup")
  async signUp(@Body() createUserDto: CreateUserDto) {
    return this.authService.signUp(createUserDto);
  }

  @ApiOperation({ summary: "Tizimga kirish" })
  @HttpCode(HttpStatus.OK)
  @Post("signin")
  async signIn(@Body() signInDto: SignInDto) {
    return this.authService.signIn(signInDto);
  }

  ///===============================================================

  @ApiOperation({ summary: "Yangi admin ro'yxattan o'tkazish" })
  @UseGuards(JwtAdminAuthGuard, AdminCreatorGuard)
  @Post("admin-signup")
  async adminSignUp(@Body() createAdminDto: CreateAdminDto) {
    return this.authService.adminSignUp(createAdminDto);
  }

  @ApiOperation({ summary: "Tizimga admin kirishi" })
  @ApiResponse({
    status: 200,
    description:"Login va Parol orqali token olib tizimga kirish"
  })
  @HttpCode(HttpStatus.OK)
  @Post("admin-signin")
  async adminSignIn(@Body() adminSignInDto: AdminSignInDto) {
    return this.authService.adminSignIn(adminSignInDto);
  }
}
