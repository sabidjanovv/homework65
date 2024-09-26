import { Controller, Get, Post, Body, Patch, Param, Delete, UploadedFile, UseInterceptors } from '@nestjs/common';
import { EventService } from './event.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { FileInterceptor } from "@nestjs/platform-express";

@Controller("event")
@UseInterceptors(FileInterceptor("photo"))
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Post()
  create(@Body() createEventDto: CreateEventDto, @UploadedFile() image: any) {    
    return this.eventService.create(createEventDto, image);
  }

  @Get()
  findAll() {
    return this.eventService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.eventService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateEventDto: UpdateEventDto) {
    return this.eventService.update(+id, updateEventDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.eventService.remove(+id);
  }
}
