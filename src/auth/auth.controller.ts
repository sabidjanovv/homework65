import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { SignInDto } from './dto/signin.dto';
import { CreateAdminDto } from "src/admin/dto/create-admin.dto";
import { AdminSignInDto } from "./dto/adminSignin.dto";


@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("signup")
  async signUp(@Body() createUserDto: CreateUserDto) {
    return this.authService.signUp(createUserDto);
  }

  @HttpCode(HttpStatus.OK)
  @Post("signin")
  async signIn(@Body() signInDto: SignInDto) {
    return this.authService.signIn(signInDto);
  }

  ///===============================================================

  @Post("admin-signup")
  async adminSignUp(@Body() createAdminDto: CreateAdminDto) {
    return this.authService.adminSignUp(createAdminDto);
  }

  @HttpCode(HttpStatus.OK)
  @Post("admin-signin")
  async adminSignIn(@Body() adminSignInDto: AdminSignInDto) {
    return this.authService.adminSignIn(adminSignInDto);
  }
}
