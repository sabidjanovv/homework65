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
exports.VenueService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const venue_model_1 = require("./models/venue.model");
let VenueService = class VenueService {
    constructor(venueModel) {
        this.venueModel = venueModel;
    }
    create(createVenueDto) {
        return this.venueModel.create(createVenueDto);
    }
    findAll() {
        return this.venueModel.findAll({ include: { all: true } });
    }
    findOne(id) {
        return this.venueModel.findByPk(id);
    }
    async update(id, updateVenueDto) {
        const venue = await this.venueModel.update(updateVenueDto, {
            where: { id },
            returning: true,
        });
        console.log(venue);
        return venue[1][0];
    }
    remove(id) {
        return this.venueModel.destroy({ where: { id } });
    }
};
exports.VenueService = VenueService;
exports.VenueService = VenueService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(venue_model_1.Venue)),
    __metadata("design:paramtypes", [Object])
], VenueService);
//# sourceMappingURL=venue.service.js.map