import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from "sequelize-typescript";
import { Roles } from "src/roles/models/roles.model";
import { UserRoles } from "./user-role.model";
import { ApiProperty } from "@nestjs/swagger";

interface IUserCreationAttr {
  name: string;
  email: string;
  password: string;
  role_value: string;
}

@Table({ tableName: "users" })
export class User extends Model<User, IUserCreationAttr> {
  @ApiProperty({
    example: 1,
    description: "Foydalanuvchining unical ID raqami (autoIncrement)",
  })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: "user1",
    description: "Foydalanuvchining ismi",
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @ApiProperty({
    example: "user1@gamil.com",
    description: "Foydalanuvchining emaili",
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  email: string;
  
  @ApiProperty({
    example: "123456",
    description: "Foydalanuvchining parol",
  })
  @Column({
    type: DataType.STRING,
  })
  password: string;

  @ApiProperty({
    example: "USER",
    description: "Foydalanuvchining dastlabki roli",
  })
  @Column({
    type: DataType.STRING,
  })
  role_value: string;

  @ApiProperty({
    example: "false",
    description: "Foydalanuvchining faollik statusi (default : false)",
  })
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  is_active: boolean;

  @BelongsToMany(() => Roles, () => UserRoles)
  roles: Roles[];
}
