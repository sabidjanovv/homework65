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
exports.LanguageService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const language_model_1 = require("./models/language.model");
let LanguageService = class LanguageService {
    constructor(languageModel) {
        this.languageModel = languageModel;
    }
    create(createLanguageDto) {
        return this.languageModel.create(createLanguageDto);
    }
    findAll() {
        return this.languageModel.findAll({ include: { all: true } });
    }
    findOne(id) {
        return this.languageModel.findOne({
            where: { id },
            include: { all: true }
        });
    }
    async update(id, updateLanguageDto) {
        const language = await this.languageModel.update(updateLanguageDto, {
            where: { id },
            returning: true,
        });
        console.log(language);
        return language[1][0];
    }
    remove(id) {
        return this.languageModel.destroy({
            where: { id }
        });
    }
};
exports.LanguageService = LanguageService;
exports.LanguageService = LanguageService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(language_model_1.Language)),
    __metadata("design:paramtypes", [Object])
], LanguageService);
//# sourceMappingURL=language.service.js.map