import { Module } from '@nestjs/common';
import { EventService } from './event.service';
import { EventController } from './event.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Event } from './models/event.model';
import { TicketModule } from 'src/ticket/ticket.module';


@Module({
  imports:[SequelizeModule.forFeature([Event]), TicketModule],
  controllers: [EventController],
  providers: [EventService],
})
export class EventModule {}
