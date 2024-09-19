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
exports.HumanCategoryService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const human_category_model_1 = require("./models/human_category.model");
let HumanCategoryService = class HumanCategoryService {
    constructor(humanCategoryModel) {
        this.humanCategoryModel = humanCategoryModel;
    }
    async createHumanCategory(createHumanCategoryDto) {
        const human_category = await this.humanCategoryModel.create(createHumanCategoryDto);
        return human_category;
    }
    async getAllHumanCategory() {
        return this.humanCategoryModel.findAll();
    }
    async getHumanCategoryById(id) {
        return this.humanCategoryModel.findByPk(id);
    }
    async getHumanCategoryByName(name) {
        return this.humanCategoryModel.findOne({ where: { name } });
    }
    async deleteHumanCategory(id) {
        return this.humanCategoryModel.destroy({ where: { id } });
    }
    async updateHumanCategory(id, updateHumanCategoryDto) {
        const human_category = await this.humanCategoryModel.update(updateHumanCategoryDto, {
            where: { id },
            returning: true,
        });
        console.log(human_category);
        return human_category[1][0];
    }
};
exports.HumanCategoryService = HumanCategoryService;
exports.HumanCategoryService = HumanCategoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(human_category_model_1.HumanCategory)),
    __metadata("design:paramtypes", [Object])
], HumanCategoryService);
//# sourceMappingURL=human_category.service.js.map