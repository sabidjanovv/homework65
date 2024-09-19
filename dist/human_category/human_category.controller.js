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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HumanCategoryController = void 0;
const common_1 = require("@nestjs/common");
const human_category_service_1 = require("./human_category.service");
const create_human_category_dto_1 = require("./dto/create-human_category.dto");
const update_human_category_dto_1 = require("./dto/update-human_category.dto");
let HumanCategoryController = class HumanCategoryController {
    constructor(humanCategoryService) {
        this.humanCategoryService = humanCategoryService;
    }
    async createHumanCategory(createHumanCategoryDto) {
        return this.humanCategoryService.createHumanCategory(createHumanCategoryDto);
    }
    async getAllHumanCategory() {
        return this.humanCategoryService.getAllHumanCategory();
    }
    async getHumanCategoryByName(name) {
        return this.humanCategoryService.getHumanCategoryByName(name);
    }
    async getHumanCategoryById(id) {
        return this.humanCategoryService.getHumanCategoryById(id);
    }
    async deleteHumanCategory(id) {
        return this.humanCategoryService.deleteHumanCategory(id);
    }
    async updateHumanCategory(id, updateHumanCategoryDto) {
        return this.humanCategoryService.updateHumanCategory(id, updateHumanCategoryDto);
    }
};
exports.HumanCategoryController = HumanCategoryController;
__decorate([
    (0, common_1.Post)("create"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_human_category_dto_1.CreateHumanCategoryDto]),
    __metadata("design:returntype", Promise)
], HumanCategoryController.prototype, "createHumanCategory", null);
__decorate([
    (0, common_1.Get)("all"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HumanCategoryController.prototype, "getAllHumanCategory", null);
__decorate([
    (0, common_1.Get)("search"),
    __param(0, (0, common_1.Query)("name")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], HumanCategoryController.prototype, "getHumanCategoryByName", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], HumanCategoryController.prototype, "getHumanCategoryById", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], HumanCategoryController.prototype, "deleteHumanCategory", null);
__decorate([
    (0, common_1.Patch)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_human_category_dto_1.UpdateHumanCategoryDto]),
    __metadata("design:returntype", Promise)
], HumanCategoryController.prototype, "updateHumanCategory", null);
exports.HumanCategoryController = HumanCategoryController = __decorate([
    (0, common_1.Controller)("human-category"),
    __metadata("design:paramtypes", [human_category_service_1.HumanCategoryService])
], HumanCategoryController);
//# sourceMappingURL=human_category.controller.js.map