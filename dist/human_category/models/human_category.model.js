"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HumanCategory = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const event_model_1 = require("../../event/models/event.model");
const swagger_1 = require("@nestjs/swagger");
let HumanCategory = class HumanCategory extends sequelize_typescript_1.Model {
};
exports.HumanCategory = HumanCategory;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: "Kategoriya uchun unikal ID raqami",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    }),
    __metadata("design:type", Number)
], HumanCategory.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "Children",
        description: "Kategoriya nomi",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
        unique: true,
    }),
    __metadata("design:type", String)
], HumanCategory.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 6,
        description: "Kategoriya uchun boshlanish yoshi",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], HumanCategory.prototype, "start_age", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 12,
        description: "Kategoriya uchun tugash yoshi",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], HumanCategory.prototype, "finish_age", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: "Jinsi (0: ayol, 1: erkak)",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], HumanCategory.prototype, "gender", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => event_model_1.Event),
    __metadata("design:type", Array)
], HumanCategory.prototype, "events", void 0);
exports.HumanCategory = HumanCategory = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: "human_category" })
], HumanCategory);
//# sourceMappingURL=human_category.model.js.map