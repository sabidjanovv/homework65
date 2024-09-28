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
const venue_venue_type_module_1 = require("./venue_venue_type/venue_venue_type.module");
const venue_venue_type_model_1 = require("./venue_venue_type/models/venue_venue_type.model");
const roles_module_1 = require("./roles/roles.module");
const roles_model_1 = require("./roles/models/roles.model");
const users_module_1 = require("./users/users.module");
const user_model_1 = require("./users/models/user.model");
const user_role_model_1 = require("./users/models/user-role.model");
const event_type_module_1 = require("./event_type/event_type.module");
const event_module_1 = require("./event/event.module");
const event_type_model_1 = require("./event_type/models/event_type.model");
const event_model_1 = require("./event/models/event.model");
const ticket_module_1 = require("./ticket/ticket.module");
const ticket_model_1 = require("./ticket/models/ticket.model");
const auth_module_1 = require("./auth/auth.module");
const customer_module_1 = require("./customer/customer.module");
const customer_card_module_1 = require("./customer_card/customer_card.module");
const customer_address_module_1 = require("./customer_address/customer_address.module");
const customer_model_1 = require("./customer/models/customer.model");
const customer_card_model_1 = require("./customer_card/models/customer_card.model");
const customer_address_model_1 = require("./customer_address/models/customer_address.model");
const country_module_1 = require("./country/country.module");
const country_model_1 = require("./country/models/country.model");
const admin_module_1 = require("./admin/admin.module");
const admin_model_1 = require("./admin/models/admin.model");
const file_module_1 = require("./file/file.module");
const serve_static_1 = require("@nestjs/serve-static");
const node_path_1 = require("node:path");
const booking_module_1 = require("./booking/booking.module");
const cart_module_1 = require("./cart/cart.module");
const cart_model_1 = require("./cart/models/cart.model");
const booking_model_1 = require("./booking/models/booking.model");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ envFilePath: ".env", isGlobal: true }),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, node_path_1.join)(__dirname, "static")
            }),
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
                    booking_status_model_1.BookingStatus,
                    venue_venue_type_model_1.VenueVenueType,
                    roles_model_1.Roles,
                    user_model_1.User,
                    user_role_model_1.UserRoles,
                    event_model_1.Event,
                    event_type_model_1.EventType,
                    ticket_model_1.Ticket,
                    customer_model_1.Customer,
                    customer_card_model_1.CustomerCard,
                    customer_address_model_1.CustomerAddress,
                    country_model_1.Country,
                    admin_model_1.Admin,
                    cart_model_1.Cart,
                    booking_model_1.Booking
                ],
                autoLoadModels: true,
                sync: { alter: true },
                logging: false,
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
            venue_venue_type_module_1.VenueVenueTypeModule,
            roles_module_1.RolesModule,
            users_module_1.UsersModule,
            event_type_module_1.EventTypeModule,
            event_module_1.EventModule,
            ticket_module_1.TicketModule,
            auth_module_1.AuthModule,
            customer_module_1.CustomerModule,
            customer_card_module_1.CustomerCardModule,
            customer_address_module_1.CustomerAddressModule,
            country_module_1.CountryModule,
            admin_module_1.AdminModule,
            file_module_1.FileModule,
            booking_module_1.BookingModule,
            cart_module_1.CartModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map