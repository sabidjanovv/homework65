"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartStatusModule = void 0;
const common_1 = require("@nestjs/common");
const cart_status_service_1 = require("./cart_status.service");
const cart_status_controller_1 = require("./cart_status.controller");
const sequelize_1 = require("@nestjs/sequelize");
const cart_status_model_1 = require("./models/cart_status.model");
let CartStatusModule = class CartStatusModule {
};
exports.CartStatusModule = CartStatusModule;
exports.CartStatusModule = CartStatusModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([cart_status_model_1.CartStatus])],
        controllers: [cart_status_controller_1.CartStatusController],
        providers: [cart_status_service_1.CartStatusService],
    })
], CartStatusModule);
//# sourceMappingURL=cart_status.module.js.map