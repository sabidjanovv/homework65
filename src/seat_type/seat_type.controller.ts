import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Query,
  Delete,
  Patch,
} from "@nestjs/common";
import { SeatTypeService } from "./seat_type.service";
import { CreateSeatTypeDto } from "./dto/create-seat_type.dto";
import { UpdateSeatTypeDto } from "./dto/update-seat_type.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { SeatType } from "./models/seat_type.model";

@ApiTags("O'rin turlari")
@Controller("seat-type")
export class SeatTypeController {
  constructor(private readonly seatTypeService: SeatTypeService) {}

  @ApiOperation({ summary: "Yangi o'rin turini qo'shish" })
  @ApiResponse({
    status: 201,
    description: "O'rin turi yaratildi",
    type: SeatType,
  })
  @Post("create")
  async createSeatTypeDto(@Body() createSeatTypeDto: CreateSeatTypeDto) {
    return this.seatTypeService.createSeatType(createSeatTypeDto);
  }

  @ApiOperation({ summary: "Barcha o'rin turlarini ko'rish" })
  @ApiResponse({
    status: 200,
    description: "O'rin turlarining ro'yxati",
    type: [SeatType],
  })
  @Get("all")
  async getAllSeatType() {
    return this.seatTypeService.getAllSeatType();
  }

  @ApiOperation({ summary: "O'rin turini nomi bo'yicha qidirish" })
  @ApiResponse({
    status: 200,
    description: "O'rin turini nomi bo'yicha olish",
    type: [SeatType],
  })
  @Get("search")
  async getSeatTypeByName(@Query("name") name: string) {
    return this.seatTypeService.getSeatTypeByName(name);
  }

  @ApiOperation({ summary: "O'rin turini ID bo'yicha olish" })
  @ApiResponse({
    status: 200,
    description: "O'rin turini ID bo'yicha olish",
    type: SeatType,
  })
  @Get(":id")
  async getSeatTypeById(@Param("id") id: number) {
    return this.seatTypeService.getSeatTypeById(id);
  }

  @ApiOperation({ summary: "O'rin turini ID bo'yicha o'chirish" })
  @ApiResponse({
    status: 200,
    description: "O'rin turi o'chirildi",
    type: SeatType,
  })
  @Delete(":id")
  async deleteSeatType(@Param("id") id: number) {
    return this.seatTypeService.deleteSeatType(id);
  }

  @ApiOperation({ summary: "O'rin turini ID bo'yicha yangilash" })
  @ApiResponse({
    status: 200,
    description: "O'rin turi yangilandi",
    type: SeatType,
  })
  @Patch(":id")
  async updateSeatType(
    @Param("id") id: number,
    @Body() updateSeatTypeDto: UpdateSeatTypeDto
  ) {
    return this.seatTypeService.updateSeatType(id, updateSeatTypeDto);
  }
}
