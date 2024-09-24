import { BadRequestException, Injectable, UnauthorizedException } from "@nestjs/common";
import { UsersService } from "../users/users.service";
import { CreateUserDto } from "../users/dto/create-user.dto";

import * as bcrypt from "bcrypt";
import { JwtService } from "@nestjs/jwt";
import { User } from "src/users/models/user.model";
import { SignInDto } from "./dto/signin.dto";

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
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

}
