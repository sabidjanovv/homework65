import { Table, Column, DataType, Model, HasMany } from "sequelize-typescript";
import { Event } from "../../event/models/event.model";
import { ApiProperty } from "@nestjs/swagger";

interface HumanCategoryAttr {
  name: string;
  start_age: number;
  finish_age: number;
  gender: number;
}

@Table({ tableName: "human_category" })
export class HumanCategory extends Model<HumanCategory, HumanCategoryAttr> {
  @ApiProperty({
    example: 1,
    description: "Kategoriya uchun unikal ID raqami",
  })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: "Children",
    description: "Kategoriya nomi",
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  name: string;

  @ApiProperty({
    example: 6,
    description: "Kategoriya uchun boshlanish yoshi",
  })
  @Column({
    type: DataType.INTEGER,
  })
  start_age: number;

  @ApiProperty({
    example: 12,
    description: "Kategoriya uchun tugash yoshi",
  })
  @Column({
    type: DataType.INTEGER,
  })
  finish_age: number;

  @ApiProperty({
    example: 1,
    description: "Jinsi (0: ayol, 1: erkak)",
  })
  @Column({
    type: DataType.INTEGER,
  })
  gender: number;

  @HasMany(() => Event)
  events: Event[];
}
