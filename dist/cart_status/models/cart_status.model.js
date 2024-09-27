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
exports.CartStatus = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const swagger_1 = require("@nestjs/swagger");
let CartStatus = class CartStatus extends sequelize_typescript_1.Model {
};
exports.CartStatus = CartStatus;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: "Unique ID of the cart status (autoIncrement)",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    }),
    __metadata("design:type", Number)
], CartStatus.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "Active",
        description: "Status of the cart",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], CartStatus.prototype, "name", void 0);
exports.CartStatus = CartStatus = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: "cartStatus", timestamps: false })
], CartStatus);
//# sourceMappingURL=cart_status.model.js.map