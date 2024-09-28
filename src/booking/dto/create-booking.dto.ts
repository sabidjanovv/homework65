import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateBookingDto {
  @ApiProperty({ example: 1, description: "ID number of Card" })
  @IsNumber()
  @IsNotEmpty()
  cartId: number;

  @ApiProperty({
    example: "2022-01-01 12:00:00",
    description: "Start Time",
  })
  createdAt: Date;

  @ApiProperty({
    example: "2022-01-01 12:05:00",
    description: "Expired Time",
  })
  finished: Date;

  @ApiProperty({ example: 1, description: "ID number of Payment Method" })
  @IsNumber()
  @IsNotEmpty()
  paymentMethodId: number;

  @ApiProperty({ example: 1, description: "ID number of Delivery Method" })
  @IsNumber()
  @IsNotEmpty()
  deliveryMethodId: number;

  @ApiProperty({ example: 1, description: "ID number Discount" })
  @IsNumber()
  @IsNotEmpty()
  discountCouponId: number;

  @ApiProperty({ example: 1, description: "ID number of Status" })
  @IsNumber()
  @IsNotEmpty()
  statusId: number;
}
