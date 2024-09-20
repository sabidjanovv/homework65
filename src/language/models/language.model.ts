import { Column, DataType, Model, Table } from "sequelize-typescript";


interface LanguageCreationAttr{
    name: string;
}
@Table({ tableName: "language", timestamps: false })
export class Language extends Model<Language, LanguageCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  name: string;
}
