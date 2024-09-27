import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { CartStatusService } from "./cart_status.service";
import { CreateCartStatusDto } from "./dto/create-cart_status.dto";
import { UpdateCartStatusDto } from "./dto/update-cart_status.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CartStatus } from "./models/cart_status.model";

@ApiTags("Cart Status")
@Controller("cart-status")
export class CartStatusController {
  constructor(private readonly cartStatusService: CartStatusService) {}

  @ApiOperation({ summary: "Create a new cart status" })
  @ApiResponse({ status: 201, description: "Created", type: CartStatus })
  @Post()
  create(@Body() createCartStatusDto: CreateCartStatusDto) {
    return this.cartStatusService.create(createCartStatusDto);
  }

  @ApiOperation({ summary: "Get all cart statuses" })
  @ApiResponse({
    status: 200,
    description: "List of cart statuses",
    type: [CartStatus],
  })
  @Get()
  findAll() {
    return this.cartStatusService.findAll();
  }

  @ApiOperation({ summary: "Get cart status by ID" })
  @ApiResponse({
    status: 200,
    description: "Cart status found",
    type: CartStatus,
  })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.cartStatusService.findOne(+id);
  }

  @ApiOperation({ summary: "Update cart status by ID" })
  @ApiResponse({
    status: 200,
    description: "Updated cart status",
    type: CartStatus,
  })
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateCartStatusDto: UpdateCartStatusDto
  ) {
    return this.cartStatusService.update(+id, updateCartStatusDto);
  }

  @ApiOperation({ summary: "Delete cart status by ID" })
  @ApiResponse({
    status: 200,
    description: "Deleted cart status",
    type: CartStatus,
  })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.cartStatusService.remove(+id);
  }
}
