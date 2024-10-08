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
exports.District = void 0;
const swagger_1 = require("@nestjs/swagger");
const sequelize_typescript_1 = require("sequelize-typescript");
const customer_address_model_1 = require("../../customer_address/models/customer_address.model");
const region_model_1 = require("../../region/models/region.model");
const venue_model_1 = require("../../venue/models/venue.model");
let District = class District extends sequelize_typescript_1.Model {
};
exports.District = District;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: "Unique ID of the district (autoIncrement)",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    }),
    __metadata("design:type", Number)
], District.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => region_model_1.Region),
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: "Region ID to which the district belongs",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], District.prototype, "regionId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "District Name",
        description: "Name of the district",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(),
    }),
    __metadata("design:type", String)
], District.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => region_model_1.Region),
    __metadata("design:type", region_model_1.Region)
], District.prototype, "region", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => venue_model_1.Venue),
    __metadata("design:type", Array)
], District.prototype, "venues", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => customer_address_model_1.CustomerAddress),
    __metadata("design:type", Array)
], District.prototype, "customerAddresses", void 0);
exports.District = District = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: "district", timestamps: false })
], District);
//# sourceMappingURL=district.model.js.map