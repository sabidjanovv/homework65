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
exports.SeatTypeService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const seat_type_model_1 = require("./models/seat_type.model");
let SeatTypeService = class SeatTypeService {
    constructor(seatTypeModel) {
        this.seatTypeModel = seatTypeModel;
    }
    async createSeatType(createSeatTypeDto) {
        const seat_type = await this.seatTypeModel.create(createSeatTypeDto);
        return seat_type;
    }
    async getAllSeatType() {
        return this.seatTypeModel.findAll();
    }
    async getSeatTypeById(id) {
        return this.seatTypeModel.findByPk(id);
    }
    async getSeatTypeByName(name) {
        return this.seatTypeModel.findOne({ where: { name } });
    }
    async deleteSeatType(id) {
        return this.seatTypeModel.destroy({ where: { id } });
    }
    async updateSeatType(id, updateSeatTypeDto) {
        const seat_type = await this.seatTypeModel.update(updateSeatTypeDto, {
            where: { id },
            returning: true,
        });
        console.log(seat_type);
        return seat_type[1][0];
    }
};
exports.SeatTypeService = SeatTypeService;
exports.SeatTypeService = SeatTypeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(seat_type_model_1.SeatType)),
    __metadata("design:paramtypes", [Object])
], SeatTypeService);
//# sourceMappingURL=seat_type.service.js.map