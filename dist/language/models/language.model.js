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
exports.Language = void 0;
const swagger_1 = require("@nestjs/swagger");
const sequelize_typescript_1 = require("sequelize-typescript");
const customer_model_1 = require("../../customer/models/customer.model");
const event_model_1 = require("../../event/models/event.model");
let Language = class Language extends sequelize_typescript_1.Model {
};
exports.Language = Language;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: "Unique ID of the language (autoIncrement)",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    }),
    __metadata("design:type", Number)
], Language.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "English",
        description: "Name of the language",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
        unique: true,
    }),
    __metadata("design:type", String)
], Language.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => event_model_1.Event),
    __metadata("design:type", Array)
], Language.prototype, "events", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => customer_model_1.Customer),
    __metadata("design:type", Array)
], Language.prototype, "customers", void 0);
exports.Language = Language = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: "language", timestamps: false })
], Language);
//# sourceMappingURL=language.model.js.map