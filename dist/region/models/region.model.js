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
exports.Region = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const customer_address_model_1 = require("../../customer_address/models/customer_address.model");
const district_model_1 = require("../../district/models/district.model");
const venue_model_1 = require("../../venue/models/venue.model");
const swagger_1 = require("@nestjs/swagger");
let Region = class Region extends sequelize_typescript_1.Model {
};
exports.Region = Region;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: "Mintaqaning unikal ID raqami (autoIncrement)",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    }),
    __metadata("design:type", Number)
], Region.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "Toshkent",
        description: "Mintaqaning nomi",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(100),
        allowNull: false,
    }),
    __metadata("design:type", String)
], Region.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => district_model_1.District),
    __metadata("design:type", Array)
], Region.prototype, "districts", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => venue_model_1.Venue),
    __metadata("design:type", Array)
], Region.prototype, "venue_photos", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => customer_address_model_1.CustomerAddress),
    __metadata("design:type", Array)
], Region.prototype, "customerAddresses", void 0);
exports.Region = Region = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: "region" })
], Region);
//# sourceMappingURL=region.model.js.map