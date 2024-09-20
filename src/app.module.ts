import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { HumanCategoryModule } from "./human_category/human_category.module";
import { HumanCategory } from "./human_category/models/human_category.model";
import { SeatTypeModule } from "./seat_type/seat_type.module";
import { SeatType } from "./seat_type/models/seat_type.model";
import { VenueTypeModule } from "./venue_type/venue_type.module";
import { VenueType } from "./venue_type/models/venue_type.model";
import { VenueModule } from "./venue/venue.module";
import { Venue } from "./venue/models/venue.model";
import { VenuePhotoModule } from "./venue_photo/venue_photo.module";
import { VenuePhoto } from "./venue_photo/models/venue_photo.model";
import { RegionModule } from "./region/region.module";
import { Region } from "./region/models/region.model";
import { DistrictModule } from "./district/district.module";
import { District } from "./district/models/district.model";
import { SeatModule } from "./seat/seat.module";
import { Seat } from "./seat/models/seat.model";
import { LanguageModule } from "./language/language.module";
import { Language } from "./language/models/language.model";
import { TicketStatusModule } from "./ticket_status/ticket_status.module";
import { TicketStatus } from "./ticket_status/models/ticket_status.model";
import { CartStatusModule } from './cart_status/cart_status.module';
import { CartStatus } from "./cart_status/models/cart_status.model";
import { BookingStatusModule } from './booking_status/booking_status.module';
import { BookingStatus } from "./booking_status/models/booking_status.model";

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: ".env", isGlobal: true }),
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [
        HumanCategory,
        SeatType,
        VenueType,
        Venue,
        VenuePhoto,
        Region,
        District,
        Seat,
        Language,
        TicketStatus,
        CartStatus,
        BookingStatus
      ],
      autoLoadModels: true,
      sync: { alter: true },
      logging: true,
    }),
    HumanCategoryModule,
    SeatTypeModule,
    VenueTypeModule,
    VenueModule,
    VenuePhotoModule,
    RegionModule,
    DistrictModule,
    SeatModule,
    LanguageModule,
    TicketStatusModule,
    CartStatusModule,
    BookingStatusModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
