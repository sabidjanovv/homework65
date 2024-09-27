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
exports.CartStatusController = void 0;
const common_1 = require("@nestjs/common");
const cart_status_service_1 = require("./cart_status.service");
const create_cart_status_dto_1 = require("./dto/create-cart_status.dto");
const update_cart_status_dto_1 = require("./dto/update-cart_status.dto");
const swagger_1 = require("@nestjs/swagger");
const cart_status_model_1 = require("./models/cart_status.model");
let CartStatusController = class CartStatusController {
    constructor(cartStatusService) {
        this.cartStatusService = cartStatusService;
    }
    create(createCartStatusDto) {
        return this.cartStatusService.create(createCartStatusDto);
    }
    findAll() {
        return this.cartStatusService.findAll();
    }
    findOne(id) {
        return this.cartStatusService.findOne(+id);
    }
    update(id, updateCartStatusDto) {
        return this.cartStatusService.update(+id, updateCartStatusDto);
    }
    remove(id) {
        return this.cartStatusService.remove(+id);
    }
};
exports.CartStatusController = CartStatusController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Create a new cart status" }),
    (0, swagger_1.ApiResponse)({ status: 201, description: "Created", type: cart_status_model_1.CartStatus }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_cart_status_dto_1.CreateCartStatusDto]),
    __metadata("design:returntype", void 0)
], CartStatusController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Get all cart statuses" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "List of cart statuses",
        type: [cart_status_model_1.CartStatus],
    }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CartStatusController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Get cart status by ID" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Cart status found",
        type: cart_status_model_1.CartStatus,
    }),
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CartStatusController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Update cart status by ID" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Updated cart status",
        type: cart_status_model_1.CartStatus,
    }),
    (0, common_1.Patch)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_cart_status_dto_1.UpdateCartStatusDto]),
    __metadata("design:returntype", void 0)
], CartStatusController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Delete cart status by ID" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Deleted cart status",
        type: cart_status_model_1.CartStatus,
    }),
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CartStatusController.prototype, "remove", null);
exports.CartStatusController = CartStatusController = __decorate([
    (0, swagger_1.ApiTags)("Cart Status"),
    (0, common_1.Controller)("cart-status"),
    __metadata("design:paramtypes", [cart_status_service_1.CartStatusService])
], CartStatusController);
//# sourceMappingURL=cart_status.controller.js.map