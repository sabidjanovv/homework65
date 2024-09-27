import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { ApiTags, ApiOperation, ApiResponse } from "@nestjs/swagger";
import { CustomerService } from "./customer.service";
import { CreateCustomerDto } from "./dto/create-customer.dto";
import { UpdateCustomerDto } from "./dto/update-customer.dto";
import { Customer } from "./models/customer.model";

@ApiTags("Mijozlar")
@Controller("customer")
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @ApiOperation({ summary: "Yangi mijoz qo'shish" })
  @ApiResponse({
    status: 201,
    description: "Mijoz yaratildi",
    type: Customer,
  })
  @Post()
  create(@Body() createCustomerDto: CreateCustomerDto) {
    return this.customerService.create(createCustomerDto);
  }

  @ApiOperation({ summary: "Barcha mijozlarni ro'yxatini ko'rish" })
  @ApiResponse({
    status: 200,
    description: "Barcha mijozlar ro'yxati",
    type: [Customer],
  })
  @Get()
  findAll() {
    return this.customerService.findAll();
  }

  @ApiOperation({ summary: "Mijozni ID bo'yicha ko'rish" })
  @ApiResponse({
    status: 200,
    description: "Mijozni ID bo'yicha ko'rish",
    type: Customer,
  })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.customerService.findOne(+id);
  }

  @ApiOperation({ summary: "Mijoz ma'lumotlarini tahrirlash" })
  @ApiResponse({
    status: 200,
    description: "Mijoz ma'lumotlari yangilandi",
    type: Customer,
  })
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateCustomerDto: UpdateCustomerDto
  ) {
    return this.customerService.update(+id, updateCustomerDto);
  }

  @ApiOperation({ summary: "Mijozni ID bo'yicha o'chirish" })
  @ApiResponse({
    status: 200,
    description: "Mijoz o'chirildi",
    type: Customer,
  })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.customerService.remove(+id);
  }
}
