import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { UsersService } from "../users/users.service";
import { CreateUserDto } from "../users/dto/create-user.dto";

import * as bcrypt from "bcrypt";
import { JwtService } from "@nestjs/jwt";
import { User } from "src/users/models/user.model";
import { SignInDto } from "./dto/signin.dto";
import { AdminService } from "src/admin/admin.service";
import { CreateAdminDto } from "src/admin/dto/create-admin.dto";
import { Admin } from "src/admin/models/admin.model";
import { AdminSignInDto } from "./dto/adminSignin.dto";

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
    private readonly adminService: AdminService
  ) {}

  async signUp(createUserDto: CreateUserDto) {
    const candidate = await this.userService.findUserByEmail(
      createUserDto.email
    );

    if (candidate) {
      throw new BadRequestException("User already exists");
    }

    const hashedPassword = await bcrypt.hash(createUserDto.password, 7);
    const newUser = await this.userService.create({
      ...createUserDto,
      password: hashedPassword,
    });

    return this.generateToken(newUser);
  }

  async signIn(signInDto: SignInDto) {
    const user = await this.userService.findUserByEmail(signInDto.email);

    if (!user) {
      throw new UnauthorizedException("User not found");
    }
    const validPassword = await bcrypt.compare(
      signInDto.password,
      user.password
    );

    if (!validPassword) {
      throw new UnauthorizedException("User not found");
    }
    return this.generateToken(user);
  }

  async generateToken(user: User) {
    const payload = {
      sub: user.id,
      email: user.email,
      roles: user.roles,
    };
    return this.jwtService.sign(payload);
  }

  async adminSignUp(createAdminDto: CreateAdminDto) {
    const adminCandidate = await this.adminService.findAdminByLogin(
      createAdminDto.login
    );

    if (adminCandidate) {
      throw new BadRequestException("Admin already exists");
    }

    const hashedPassword = await bcrypt.hash(createAdminDto.password, 7);
    const newAdmin = await this.adminService.create({
      ...createAdminDto,
      password: hashedPassword,
    });

    return this.generateAdminToken(newAdmin);
  }

  async adminSignIn(adminSignInDto: AdminSignInDto) {
    const admin = await this.adminService.findAdminByLogin(adminSignInDto.login);

    if (!admin) {
      throw new UnauthorizedException("Admin not found");
    }
    const validPassword = await bcrypt.compare(
      adminSignInDto.password,
      admin.password
    );

    if (!validPassword) {
      throw new UnauthorizedException("Admin not found");
    }
    return this.generateAdminToken(admin);
  }

  async generateAdminToken(admin: Admin) {
    const payload = {
      sub: admin.id,
      login: admin.login,
      is_creator: admin.is_creator,
    };
    return this.jwtService.sign(payload);
  }
}
