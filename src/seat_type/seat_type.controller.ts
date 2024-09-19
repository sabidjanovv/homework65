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

@Controller("seat-type")
export class SeatTypeController {
  constructor(private readonly seatTypeService: SeatTypeService) {}

  @Post("create")
  async createSeatTypeDto(@Body() createSeatTypeDto: CreateSeatTypeDto) {
    return this.seatTypeService.createSeatType(createSeatTypeDto);
  }

  @Get("all")
  async getAllSeatType(){
    return this.seatTypeService.getAllSeatType();
  }

  @Get("search")
  async getSeatTypeByName(@Query("name") name:string){
    return this.seatTypeService.getSeatTypeByName(name);
  }

  @Get(":id")
  async getSeatTypeById(@Param("id") id: number){
    return this.seatTypeService.getSeatTypeById(id);
  }

  @Delete(":id")
  async deleteSeatType(@Param("id") id:number){
    return this.seatTypeService.deleteSeatType(id);
  }

  @Patch(":id")
  async updateSeatType(
    @Param("id") id:number,
    @Body() updateSeatTypeDto: UpdateSeatTypeDto
  ){
    return this.seatTypeService.updateSeatType(
        id,
        updateSeatTypeDto
    )
  }

}
