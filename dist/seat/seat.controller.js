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
exports.SeatController = void 0;
const common_1 = require("@nestjs/common");
const seat_service_1 = require("./seat.service");
const create_seat_dto_1 = require("./dto/create-seat.dto");
const update_seat_dto_1 = require("./dto/update-seat.dto");
const swagger_1 = require("@nestjs/swagger");
const seat_model_1 = require("./models/seat.model");
let SeatController = class SeatController {
    constructor(seatService) {
        this.seatService = seatService;
    }
    create(createSeatDto) {
        return this.seatService.create(createSeatDto);
    }
    findAll() {
        return this.seatService.findAll();
    }
    findOne(id) {
        return this.seatService.findOne(id);
    }
    update(id, updateSeatDto) {
        return this.seatService.update(id, updateSeatDto);
    }
    remove(id) {
        return this.seatService.remove(id);
    }
};
exports.SeatController = SeatController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Create a new seat" }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: "Seat successfully created",
        type: seat_model_1.Seat,
    }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_seat_dto_1.CreateSeatDto]),
    __metadata("design:returntype", void 0)
], SeatController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Get all seats" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "List of all seats",
        type: [seat_model_1.Seat],
    }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SeatController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Get seat by ID" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Seat details by ID",
        type: seat_model_1.Seat,
    }),
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], SeatController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Update seat by ID" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Seat successfully updated",
        type: seat_model_1.Seat,
    }),
    (0, common_1.Patch)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_seat_dto_1.UpdateSeatDto]),
    __metadata("design:returntype", void 0)
], SeatController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Delete seat by ID" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Seat successfully deleted",
        type: seat_model_1.Seat,
    }),
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], SeatController.prototype, "remove", null);
exports.SeatController = SeatController = __decorate([
    (0, swagger_1.ApiTags)("Seat Management"),
    (0, common_1.Controller)("seat"),
    __metadata("design:paramtypes", [seat_service_1.SeatService])
], SeatController);
//# sourceMappingURL=seat.controller.js.map