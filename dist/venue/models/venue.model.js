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
exports.Venue = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const district_model_1 = require("../../district/models/district.model");
const region_model_1 = require("../../region/models/region.model");
const seat_model_1 = require("../../seat/models/seat.model");
const venue_photo_model_1 = require("../../venue_photo/models/venue_photo.model");
let Venue = class Venue extends sequelize_typescript_1.Model {
};
exports.Venue = Venue;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    }),
    __metadata("design:type", Number)
], Venue.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(),
        allowNull: false,
    }),
    __metadata("design:type", String)
], Venue.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(),
    }),
    __metadata("design:type", String)
], Venue.prototype, "address", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(),
    }),
    __metadata("design:type", String)
], Venue.prototype, "location", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(),
    }),
    __metadata("design:type", String)
], Venue.prototype, "site", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(),
    }),
    __metadata("design:type", String)
], Venue.prototype, "phone", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => region_model_1.Region),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], Venue.prototype, "regionId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => region_model_1.Region),
    __metadata("design:type", region_model_1.Region)
], Venue.prototype, "region", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => district_model_1.District),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER
    }),
    __metadata("design:type", Number)
], Venue.prototype, "districtId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => district_model_1.District),
    __metadata("design:type", district_model_1.District)
], Venue.prototype, "district", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => venue_photo_model_1.VenuePhoto),
    __metadata("design:type", Array)
], Venue.prototype, "venue_photos", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => seat_model_1.Seat),
    __metadata("design:type", Array)
], Venue.prototype, "seats", void 0);
exports.Venue = Venue = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: "venue", timestamps: false })
], Venue);
//# sourceMappingURL=venue.model.js.map