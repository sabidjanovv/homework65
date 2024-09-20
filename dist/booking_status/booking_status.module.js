"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingStatusModule = void 0;
const common_1 = require("@nestjs/common");
const booking_status_service_1 = require("./booking_status.service");
const booking_status_controller_1 = require("./booking_status.controller");
const sequelize_1 = require("@nestjs/sequelize");
const booking_status_model_1 = require("./models/booking_status.model");
let BookingStatusModule = class BookingStatusModule {
};
exports.BookingStatusModule = BookingStatusModule;
exports.BookingStatusModule = BookingStatusModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([booking_status_model_1.BookingStatus])],
        controllers: [booking_status_controller_1.BookingStatusController],
        providers: [booking_status_service_1.BookingStatusService],
    })
], BookingStatusModule);
//# sourceMappingURL=booking_status.module.js.map