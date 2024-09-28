import { ApiProperty } from "@nestjs/swagger";
import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from "sequelize-typescript";
import { UserRoles } from "../../users/models/user-role.model";
import { User } from "../../users/models/user.model";

interface IRolesCreationAttr {
  value: string;
  description: string;
}

@Table({ tableName: "roles", timestamps: false })
export class Roles extends Model<Roles, IRolesCreationAttr> {
  @ApiProperty({
    example: 1,
    description: "ROLEning unical ID raqami (autoIncrement)",
  })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: "admin",
    description: "Rolening nomi",
  })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  value: string;

  @ApiProperty({
    example: "Admin rolidagi foydalanuvchilarni o'zgartirish uchun",
    description: "Rolning tavsifi",
  })
  @Column({
    type: DataType.STRING,
  })
  description: string;

  @BelongsToMany(() => User, () => UserRoles)
  users: User[];
}
