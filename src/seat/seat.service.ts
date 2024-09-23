import { Injectable } from '@nestjs/common';
import { CreateSeatDto } from './dto/create-seat.dto';
import { UpdateSeatDto } from './dto/update-seat.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Seat } from './models/seat.model';
import { Ticket } from 'src/ticket/models/ticket.model';
import { TicketStatus } from 'src/ticket_status/models/ticket_status.model';

@Injectable()
export class SeatService {
  constructor(@InjectModel(Seat) private seatModel: typeof Seat) {}
  create(createSeatDto: CreateSeatDto) {
    return this.seatModel.create(createSeatDto);
  }

  findAll() {
    return this.seatModel.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.seatModel.findOne({
      where: { id },
      include: { all: true },
    });
  }

  async update(id: number, updateSeatDto: UpdateSeatDto): Promise<Seat> {
    const seat = await this.seatModel.update(updateSeatDto, {
      where: { id },
      returning: true,
    });
    console.log(seat);
    return seat[1][0];
  }

  remove(id: number): Promise<number> {
    return this.seatModel.destroy({where:{id}});
  }
}
