import { Column, DataType, Model, Table } from "sequelize-typescript";


interface IAdminAttr {
  name: string;
  login: string;
  password: string;
  is_active: boolean;
  is_creator: boolean;
}

@Table({tableName:"admin"})
export class Admin extends Model<Admin, IAdminAttr>{
    @Column({
      type: DataType.INTEGER,
      autoIncrement: true,
      primaryKey: true
    })
    id: number;

    @Column({
      type: DataType.STRING,
      allowNull: false
    })
    name: string;

    @Column({
      type: DataType.STRING,
      allowNull: false,
      unique: true
    })
    login: string;

    @Column({
      type: DataType.STRING,
      allowNull: false
    })
    password: string;

    @Column({
      type: DataType.BOOLEAN,
      defaultValue: false
    })
    is_active: boolean;

    @Column({
      type: DataType.BOOLEAN,
      defaultValue: false
    })
    is_creator: boolean;
}
