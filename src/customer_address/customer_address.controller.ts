import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CustomerAddressService } from "./customer_address.service";
import { CreateCustomerAddressDto } from "./dto/create-customer_address.dto";
import { UpdateCustomerAddressDto } from "./dto/update-customer_address.dto";
import { CustomerAddress } from "./models/customer_address.model";

@ApiTags("Customer Addresses")
@Controller("customer-address")
export class CustomerAddressController {
  constructor(
    private readonly customerAddressService: CustomerAddressService
  ) {}

  @ApiOperation({ summary: "Create a new customer address" })
  @ApiResponse({
    status: 201,
    description: "Address created successfully",
    type: CustomerAddress,
  })
  @Post()
  create(@Body() createCustomerAddressDto: CreateCustomerAddressDto) {
    return this.customerAddressService.create(createCustomerAddressDto);
  }

  @ApiOperation({ summary: "Get all customer addresses" })
  @ApiResponse({
    status: 200,
    description: "List of addresses",
    type: [CustomerAddress],
  })
  @Get()
  findAll() {
    return this.customerAddressService.findAll();
  }

  @ApiOperation({ summary: "Get a customer address by ID" })
  @ApiResponse({
    status: 200,
    description: "Address details",
    type: CustomerAddress,
  })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.customerAddressService.findOne(+id);
  }

  @ApiOperation({ summary: "Update a customer address by ID" })
  @ApiResponse({
    status: 200,
    description: "Address updated successfully",
    type: CustomerAddress,
  })
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateCustomerAddressDto: UpdateCustomerAddressDto
  ) {
    return this.customerAddressService.update(+id, updateCustomerAddressDto);
  }

  @ApiOperation({ summary: "Delete a customer address by ID" })
  @ApiResponse({
    status: 200,
    description: "Address deleted successfully",
    type: CustomerAddress,
  })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.customerAddressService.remove(+id);
  }
}
