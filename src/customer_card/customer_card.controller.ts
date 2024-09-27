import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { CustomerCardService } from "./customer_card.service";
import { CreateCustomerCardDto } from "./dto/create-customer_card.dto";
import { UpdateCustomerCardDto } from "./dto/update-customer_card.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CustomerCard } from "./models/customer_card.model";

@ApiTags("Customer Cards")
@Controller("customer-card")
export class CustomerCardController {
  constructor(private readonly customerCardService: CustomerCardService) {}

  @ApiOperation({ summary: "Create a new customer card" })
  @ApiResponse({
    status: 201,
    description: "The customer card has been created.",
    type: CustomerCard,
  })
  @Post()
  create(@Body() createCustomerCardDto: CreateCustomerCardDto) {
    return this.customerCardService.create(createCustomerCardDto);
  }

  @ApiOperation({ summary: "Retrieve all customer cards" })
  @ApiResponse({
    status: 200,
    description: "List of customer cards",
    type: [CustomerCard],
  })
  @Get()
  findAll() {
    return this.customerCardService.findAll();
  }

  @ApiOperation({ summary: "Retrieve a customer card by ID" })
  @ApiResponse({
    status: 200,
    description: "Customer card found by ID",
    type: CustomerCard,
  })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.customerCardService.findOne(+id);
  }

  @ApiOperation({ summary: "Update a customer card by ID" })
  @ApiResponse({
    status: 200,
    description: "Customer card updated",
    type: CustomerCard,
  })
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateCustomerCardDto: UpdateCustomerCardDto
  ) {
    return this.customerCardService.update(+id, updateCustomerCardDto);
  }

  @ApiOperation({ summary: "Delete a customer card by ID" })
  @ApiResponse({
    status: 200,
    description: "Customer card deleted",
    type: CustomerCard,
  })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.customerCardService.remove(+id);
  }
}
