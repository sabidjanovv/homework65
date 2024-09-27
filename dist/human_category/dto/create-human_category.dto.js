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
exports.CreateHumanCategoryDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateHumanCategoryDto {
}
exports.CreateHumanCategoryDto = CreateHumanCategoryDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "Children",
        description: "Kategoriya nomi (masalan, Bolalar)",
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateHumanCategoryDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 6,
        description: "Kategoriya uchun boshlanish yoshi",
    }),
    __metadata("design:type", Number)
], CreateHumanCategoryDto.prototype, "start_age", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 12,
        description: "Kategoriya uchun tugash yoshi",
    }),
    __metadata("design:type", Number)
], CreateHumanCategoryDto.prototype, "finish_age", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: "Jinsi (0: ayol, 1: erkak)",
    }),
    __metadata("design:type", Number)
], CreateHumanCategoryDto.prototype, "gender", void 0);
//# sourceMappingURL=create-human_category.dto.js.map