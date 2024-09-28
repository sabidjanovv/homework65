import { Injectable } from "@nestjs/common";
import { CreateEventDto } from "./dto/create-event.dto";
import { UpdateEventDto } from "./dto/update-event.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Event } from "./models/event.model";
import { TicketService } from "../ticket/ticket.service";
import { FileService } from "../file/file.service";

@Injectable()
export class EventService {
  constructor(
    @InjectModel(Event) private eventModel: typeof Event,
    private readonly ticketService: TicketService,
    private readonly fileService: FileService
  ) {}
  async create(createEventDto: CreateEventDto, image: any) {
    const fileName = await this.fileService.saveFile(image);

    return this.eventModel.create({ ...createEventDto, photo: fileName });
  }

  async findAll() {
    const tickets = await this.ticketService.findSoldTickets();
    const seat_arr = [];
    tickets.forEach((ticket) => {
      seat_arr.push(ticket.seat);
    });
    return { soldSeats: seat_arr };
  }

  findOne(id: number) {
    return this.eventModel.findOne({
      where: { id },
      include: { all: true },
    });
  }

  async update(id: number, updateEventDto: UpdateEventDto): Promise<Event> {
    const event = await this.eventModel.update(updateEventDto, {
      where: { id },
      returning: true,
    });
    console.log(event);
    return event[1][0];
  }

  remove(id: number): Promise<number> {
    return this.eventModel.destroy({ where: { id } });
  }
}
