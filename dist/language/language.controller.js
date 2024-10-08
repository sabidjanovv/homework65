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
exports.LanguageController = void 0;
const common_1 = require("@nestjs/common");
const language_service_1 = require("./language.service");
const create_language_dto_1 = require("./dto/create-language.dto");
const update_language_dto_1 = require("./dto/update-language.dto");
const swagger_1 = require("@nestjs/swagger");
const language_model_1 = require("./models/language.model");
let LanguageController = class LanguageController {
    constructor(languageService) {
        this.languageService = languageService;
    }
    create(createLanguageDto) {
        return this.languageService.create(createLanguageDto);
    }
    findAll() {
        return this.languageService.findAll();
    }
    findOne(id) {
        return this.languageService.findOne(id);
    }
    update(id, updateLanguageDto) {
        return this.languageService.update(id, updateLanguageDto);
    }
    remove(id) {
        return this.languageService.remove(id);
    }
};
exports.LanguageController = LanguageController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Create a new language" }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: "Language successfully created",
        type: language_model_1.Language,
    }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_language_dto_1.CreateLanguageDto]),
    __metadata("design:returntype", void 0)
], LanguageController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Get all languages" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "List of all languages",
        type: [language_model_1.Language],
    }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LanguageController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Get language by ID" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Language details by ID",
        type: language_model_1.Language,
    }),
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], LanguageController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Update language by ID" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Language successfully updated",
        type: language_model_1.Language,
    }),
    (0, common_1.Patch)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_language_dto_1.UpdateLanguageDto]),
    __metadata("design:returntype", void 0)
], LanguageController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Delete language by ID" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Language successfully deleted",
        type: language_model_1.Language,
    }),
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], LanguageController.prototype, "remove", null);
exports.LanguageController = LanguageController = __decorate([
    (0, swagger_1.ApiTags)("Language Management"),
    (0, common_1.Controller)("language"),
    __metadata("design:paramtypes", [language_service_1.LanguageService])
], LanguageController);
//# sourceMappingURL=language.controller.js.map