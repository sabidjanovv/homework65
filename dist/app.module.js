"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const sequelize_1 = require("@nestjs/sequelize");
const human_category_module_1 = require("./human_category/human_category.module");
const human_category_model_1 = require("./human_category/models/human_category.model");
const seat_type_module_1 = require("./seat_type/seat_type.module");
const seat_type_model_1 = require("./seat_type/models/seat_type.model");
const venue_type_module_1 = require("./venue_type/venue_type.module");
const venue_type_model_1 = require("./venue_type/models/venue_type.model");
const venue_module_1 = require("./venue/venue.module");
const venue_model_1 = require("./venue/models/venue.model");
const venue_photo_module_1 = require("./venue_photo/venue_photo.module");
const venue_photo_model_1 = require("./venue_photo/models/venue_photo.model");
const region_module_1 = require("./region/region.module");
const region_model_1 = require("./region/models/region.model");
const district_module_1 = require("./district/district.module");
const district_model_1 = require("./district/models/district.model");
const seat_module_1 = require("./seat/seat.module");
const seat_model_1 = require("./seat/models/seat.model");
const language_module_1 = require("./language/language.module");
const language_model_1 = require("./language/models/language.model");
const ticket_status_module_1 = require("./ticket_status/ticket_status.module");
const ticket_status_model_1 = require("./ticket_status/models/ticket_status.model");
const cart_status_module_1 = require("./cart_status/cart_status.module");
const cart_status_model_1 = require("./cart_status/models/cart_status.model");
const booking_status_module_1 = require("./booking_status/booking_status.module");
const booking_status_model_1 = require("./booking_status/models/booking_status.model");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ envFilePath: ".env", isGlobal: true }),
            sequelize_1.SequelizeModule.forRoot({
                dialect: "postgres",
                host: process.env.POSTGRES_HOST,
                port: Number(process.env.POSTGRES_PORT),
                username: process.env.POSTGRES_USER,
                password: process.env.POSTGRES_PASSWORD,
                database: process.env.POSTGRES_DB,
                models: [
                    human_category_model_1.HumanCategory,
                    seat_type_model_1.SeatType,
                    venue_type_model_1.VenueType,
                    venue_model_1.Venue,
                    venue_photo_model_1.VenuePhoto,
                    region_model_1.Region,
                    district_model_1.District,
                    seat_model_1.Seat,
                    language_model_1.Language,
                    ticket_status_model_1.TicketStatus,
                    cart_status_model_1.CartStatus,
                    booking_status_model_1.BookingStatus
                ],
                autoLoadModels: true,
                sync: { alter: true },
                logging: true,
            }),
            human_category_module_1.HumanCategoryModule,
            seat_type_module_1.SeatTypeModule,
            venue_type_module_1.VenueTypeModule,
            venue_module_1.VenueModule,
            venue_photo_module_1.VenuePhotoModule,
            region_module_1.RegionModule,
            district_module_1.DistrictModule,
            seat_module_1.SeatModule,
            language_module_1.LanguageModule,
            ticket_status_module_1.TicketStatusModule,
            cart_status_module_1.CartStatusModule,
            booking_status_module_1.BookingStatusModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map