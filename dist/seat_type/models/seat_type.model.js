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
exports.SeatType = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const seat_model_1 = require("../../seat/models/seat.model");
const swagger_1 = require("@nestjs/swagger");
let SeatType = class SeatType extends sequelize_typescript_1.Model {
};
exports.SeatType = SeatType;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: "O'rin turining unikal ID raqami (autoIncrement)",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    }),
    __metadata("design:type", Number)
], SeatType.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "VIP",
        description: "O'rin turining nomi",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
        unique: true,
    }),
    __metadata("design:type", String)
], SeatType.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => seat_model_1.Seat),
    __metadata("design:type", Array)
], SeatType.prototype, "venue_seats", void 0);
exports.SeatType = SeatType = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: "seat_type" })
], SeatType);
//# sourceMappingURL=seat_type.model.js.map