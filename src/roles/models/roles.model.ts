import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from "sequelize-typescript";
import { UserRoles } from "src/users/models/user-role.model";
import { User } from "src/users/models/user.model";

interface IRolesCreationAttr {
  value: string;
  description: string;
}

@Table({ tableName: "roles", timestamps: false })
export class Roles extends Model<Roles, IRolesCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  value: string;

  @Column({
    type: DataType.STRING,
  })
  description: string;

  @BelongsToMany(() => User, () => UserRoles)
  users: User[];
}
