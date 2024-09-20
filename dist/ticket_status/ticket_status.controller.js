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
exports.TicketStatusController = void 0;
const common_1 = require("@nestjs/common");
const ticket_status_service_1 = require("./ticket_status.service");
const create_ticket_status_dto_1 = require("./dto/create-ticket_status.dto");
const update_ticket_status_dto_1 = require("./dto/update-ticket_status.dto");
let TicketStatusController = class TicketStatusController {
    constructor(ticketStatusService) {
        this.ticketStatusService = ticketStatusService;
    }
    create(createTicketStatusDto) {
        return this.ticketStatusService.create(createTicketStatusDto);
    }
    findAll() {
        return this.ticketStatusService.findAll();
    }
    findOne(id) {
        return this.ticketStatusService.findOne(+id);
    }
    update(id, updateTicketStatusDto) {
        return this.ticketStatusService.update(+id, updateTicketStatusDto);
    }
    remove(id) {
        return this.ticketStatusService.remove(+id);
    }
};
exports.TicketStatusController = TicketStatusController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_ticket_status_dto_1.CreateTicketStatusDto]),
    __metadata("design:returntype", void 0)
], TicketStatusController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TicketStatusController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TicketStatusController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_ticket_status_dto_1.UpdateTicketStatusDto]),
    __metadata("design:returntype", void 0)
], TicketStatusController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TicketStatusController.prototype, "remove", null);
exports.TicketStatusController = TicketStatusController = __decorate([
    (0, common_1.Controller)('ticket-status'),
    __metadata("design:paramtypes", [ticket_status_service_1.TicketStatusService])
], TicketStatusController);
//# sourceMappingURL=ticket_status.controller.js.map