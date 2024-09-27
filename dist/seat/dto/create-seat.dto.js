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
exports.CreateSeatDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateSeatDto {
}
exports.CreateSeatDto = CreateSeatDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: "A", description: "Sector of the seat" }),
    __metadata("design:type", String)
], CreateSeatDto.prototype, "sector", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: "Row number of the seat" }),
    __metadata("design:type", Number)
], CreateSeatDto.prototype, "row_number", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 5, description: "Seat number" }),
    __metadata("design:type", Number)
], CreateSeatDto.prototype, "number", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: "ID of the venue" }),
    __metadata("design:type", Number)
], CreateSeatDto.prototype, "venueId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 2, description: "ID of the seat type" }),
    __metadata("design:type", Number)
], CreateSeatDto.prototype, "seatTypeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "1A", description: "Location in the seating schema" }),
    __metadata("design:type", String)
], CreateSeatDto.prototype, "locationInSchema", void 0);
//# sourceMappingURL=create-seat.dto.js.map