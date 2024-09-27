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
exports.VenueType = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const venue_model_1 = require("../../venue/models/venue.model");
const venue_venue_type_model_1 = require("../../venue_venue_type/models/venue_venue_type.model");
const swagger_1 = require("@nestjs/swagger");
let VenueType = class VenueType extends sequelize_typescript_1.Model {
};
exports.VenueType = VenueType;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: "Unique ID of the venue type (autoIncrement)",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    }),
    __metadata("design:type", Number)
], VenueType.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "Concert Hall",
        description: "Name of the venue type",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
        unique: true,
    }),
    __metadata("design:type", String)
], VenueType.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => venue_model_1.Venue, () => venue_venue_type_model_1.VenueVenueType),
    __metadata("design:type", Array)
], VenueType.prototype, "venues", void 0);
exports.VenueType = VenueType = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: "venue_type" })
], VenueType);
//# sourceMappingURL=venue_type.model.js.map