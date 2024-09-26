import { Module } from '@nestjs/common';
import { EventService } from './event.service';
import { EventController } from './event.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Event } from './models/event.model';
import { TicketModule } from 'src/ticket/ticket.module';
import { FileModule } from 'src/file/file.module';


@Module({
  imports: [SequelizeModule.forFeature([Event]), TicketModule, FileModule],
  controllers: [EventController],
  providers: [EventService],
})
export class EventModule {}



// Savol: NestJSda @Module dekoratori nima uchun kerak?

// Javob: @Module dekoratori NestJS'da modullarni yaratish uchun
// ishlatiladi. U xizmatlar, kontrollerlar va boshqa modullarni 
// bir joyda jamlaydi va ular o'rtasida bog'lanish o'rnatadi.