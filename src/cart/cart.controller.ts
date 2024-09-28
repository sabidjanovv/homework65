import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Cart } from './models/cart.model';

@ApiTags("Cart")
@Controller("cart")
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @ApiOperation({ summary: "Create a new cart" })
  @ApiResponse({ status: 201, description: "Cart created successfully", type: Cart })
  @Post()
  create(@Body() createCartDto: CreateCartDto) {
    return this.cartService.create(createCartDto);
  }

  @ApiOperation({ summary: "Get all carts" })
  @ApiResponse({ status: 200, description: "All carts retrieved successfully", type: [Cart] })
  @Get()
  findAll() {
    return this.cartService.findAll();
  }

  @ApiOperation({ summary: "Get a cart by ID" })
  @ApiResponse({ status: 200, description: "Cart details by ID", type: Cart })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.cartService.findOne(+id);
  }

  @ApiOperation({ summary: "Update a cart by ID" })
  @ApiResponse({ status: 200, description: "Cart updated successfully", type: Cart })
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateCartDto: UpdateCartDto) {
    return this.cartService.update(+id, updateCartDto);
  }

  @ApiOperation({ summary: "Delete a cart by ID" })
  @ApiResponse({ status: 200, description: "Cart deleted successfully" })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.cartService.remove(+id);
  }
}
