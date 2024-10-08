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
exports.BookingStatusController = void 0;
const common_1 = require("@nestjs/common");
const booking_status_service_1 = require("./booking_status.service");
const create_booking_status_dto_1 = require("./dto/create-booking_status.dto");
const update_booking_status_dto_1 = require("./dto/update-booking_status.dto");
const swagger_1 = require("@nestjs/swagger");
const booking_status_model_1 = require("./models/booking_status.model");
let BookingStatusController = class BookingStatusController {
    constructor(bookingStatusService) {
        this.bookingStatusService = bookingStatusService;
    }
    create(createBookingStatusDto) {
        return this.bookingStatusService.create(createBookingStatusDto);
    }
    findAll() {
        return this.bookingStatusService.findAll();
    }
    findOne(id) {
        return this.bookingStatusService.findOne(+id);
    }
    update(id, updateBookingStatusDto) {
        return this.bookingStatusService.update(+id, updateBookingStatusDto);
    }
    remove(id) {
        return this.bookingStatusService.remove(+id);
    }
};
exports.BookingStatusController = BookingStatusController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Create a new booking status" }),
    (0, swagger_1.ApiResponse)({ status: 201, description: "Created", type: booking_status_model_1.BookingStatus }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_booking_status_dto_1.CreateBookingStatusDto]),
    __metadata("design:returntype", void 0)
], BookingStatusController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Get all booking statuses" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "List of booking statuses",
        type: [booking_status_model_1.BookingStatus],
    }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BookingStatusController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Get booking status by ID" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Booking status found",
        type: booking_status_model_1.BookingStatus,
    }),
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BookingStatusController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Update booking status by ID" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Updated booking status",
        type: booking_status_model_1.BookingStatus,
    }),
    (0, common_1.Patch)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_booking_status_dto_1.UpdateBookingStatusDto]),
    __metadata("design:returntype", void 0)
], BookingStatusController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Delete booking status by ID" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Deleted booking status",
        type: booking_status_model_1.BookingStatus,
    }),
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BookingStatusController.prototype, "remove", null);
exports.BookingStatusController = BookingStatusController = __decorate([
    (0, swagger_1.ApiTags)("Booking Status"),
    (0, common_1.Controller)("booking-status"),
    __metadata("design:paramtypes", [booking_status_service_1.BookingStatusService])
], BookingStatusController);
//# sourceMappingURL=booking_status.controller.js.map