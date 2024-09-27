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
exports.CreateVenueDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateVenueDto {
}
exports.CreateVenueDto = CreateVenueDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: "venue1", description: "Venue nomi" }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateVenueDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "Qayerdir", description: "Venuening addressi kiritiladi" }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateVenueDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "40.3757, 76.9469", description: "Venuening koordinatlari" }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateVenueDto.prototype, "location", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "www.example.com", description: "Venuening bosh URL" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateVenueDto.prototype, "site", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "+998-91-123-45-67", description: "Venuening telefon raqami" }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateVenueDto.prototype, "phone", void 0);
//# sourceMappingURL=create-venue.dto.js.map