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
exports.VenueTypeController = void 0;
const common_1 = require("@nestjs/common");
const venue_type_service_1 = require("./venue_type.service");
const create_venue_type_dto_1 = require("./dto/create-venue_type.dto");
const update_venue_type_dto_1 = require("./dto/update-venue_type.dto");
let VenueTypeController = class VenueTypeController {
    constructor(venueTypeService) {
        this.venueTypeService = venueTypeService;
    }
    async createVenueTypeDto(createVenueTypeDto) {
        return this.venueTypeService.createVenueType(createVenueTypeDto);
    }
    async getAllVenueType() {
        return this.venueTypeService.getAllVenueType();
    }
    async getVenueTypeByName(name) {
        return this.venueTypeService.getVenueTypeByName(name);
    }
    async getVenueTypeById(id) {
        return this.venueTypeService.getVenueTypeById(id);
    }
    async deleteVenueType(id) {
        return this.venueTypeService.deleteVenueType(id);
    }
    async updateVenueType(id, updateVenueTypeDto) {
        return this.venueTypeService.updateVenueType(id, updateVenueTypeDto);
    }
};
exports.VenueTypeController = VenueTypeController;
__decorate([
    (0, common_1.Post)("create"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_venue_type_dto_1.CreateVenueTypeDto]),
    __metadata("design:returntype", Promise)
], VenueTypeController.prototype, "createVenueTypeDto", null);
__decorate([
    (0, common_1.Get)("all"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], VenueTypeController.prototype, "getAllVenueType", null);
__decorate([
    (0, common_1.Get)("search"),
    __param(0, (0, common_1.Query)("name")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], VenueTypeController.prototype, "getVenueTypeByName", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], VenueTypeController.prototype, "getVenueTypeById", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], VenueTypeController.prototype, "deleteVenueType", null);
__decorate([
    (0, common_1.Patch)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_venue_type_dto_1.UpdateVenueTypeDto]),
    __metadata("design:returntype", Promise)
], VenueTypeController.prototype, "updateVenueType", null);
exports.VenueTypeController = VenueTypeController = __decorate([
    (0, common_1.Controller)("venue-type"),
    __metadata("design:paramtypes", [venue_type_service_1.VenueTypeService])
], VenueTypeController);
//# sourceMappingURL=venue_type.controller.js.map