import { BadRequestException, Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { InjectModel } from "@nestjs/sequelize";
import { User } from "./models/user.model";
import { RolesService } from "src/roles/roles.service";
import { Roles } from "src/roles/models/roles.model";

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private userModel: typeof User,
    // @InjectModel(User) private roleModel: typeof Roles,  //2-usul
    private rolesService: RolesService
  ) {}
  async create(createUserDto: CreateUserDto) {
    const newUser = await this.userModel.create(createUserDto);

    // const role = await this.roleModel.findOne({
    //   where:{value: createUserDto.role_value.toUpperCase()}   // 2- usul
    // })

    const role = await this.rolesService.findRoleByValue(
      createUserDto.role_value
    );

    if (!role) {
      throw new BadRequestException("Role not found");
    }
    await newUser.$set("roles", [role.id]);
    await newUser.save();
    newUser.roles = [role];
    return newUser;
  }

  findAll() {
    return this.userModel.findAll({
      include:{all:true}
    });;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
