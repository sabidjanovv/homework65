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
exports.BookingStatusService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const booking_status_model_1 = require("./models/booking_status.model");
let BookingStatusService = class BookingStatusService {
    constructor(bookingStatusModel) {
        this.bookingStatusModel = bookingStatusModel;
    }
    create(createBookingStatusDto) {
        return this.bookingStatusModel.create(createBookingStatusDto);
    }
    findAll() {
        return this.bookingStatusModel.findAll({ include: { all: true } });
    }
    findOne(id) {
        return this.bookingStatusModel.findOne({
            where: { id },
            include: { all: true },
        });
    }
    async update(id, updateBookingStatusDto) {
        const bookingStatus = await this.bookingStatusModel.update(updateBookingStatusDto, {
            where: { id },
            returning: true,
        });
        console.log(bookingStatus);
        return bookingStatus[1][0];
    }
    remove(id) {
        return this.bookingStatusModel.destroy({
            where: { id },
        });
    }
};
exports.BookingStatusService = BookingStatusService;
exports.BookingStatusService = BookingStatusService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(booking_status_model_1.BookingStatus)),
    __metadata("design:paramtypes", [Object])
], BookingStatusService);
//# sourceMappingURL=booking_status.service.js.map