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
exports.Seat = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const seat_type_model_1 = require("../../seat_type/models/seat_type.model");
const venue_model_1 = require("../../venue/models/venue.model");
let Seat = class Seat extends sequelize_typescript_1.Model {
};
exports.Seat = Seat;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    }),
    __metadata("design:type", Number)
], Seat.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Seat.prototype, "sector", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], Seat.prototype, "row_number", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], Seat.prototype, "number", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => venue_model_1.Venue),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], Seat.prototype, "venueId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => venue_model_1.Venue),
    __metadata("design:type", venue_model_1.Venue)
], Seat.prototype, "venue", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => seat_type_model_1.SeatType),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], Seat.prototype, "seatTypeId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => seat_type_model_1.SeatType),
    __metadata("design:type", seat_type_model_1.SeatType)
], Seat.prototype, "seatType", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Seat.prototype, "locationInSchema", void 0);
exports.Seat = Seat = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: "seat" })
], Seat);
//# sourceMappingURL=seat.model.js.map