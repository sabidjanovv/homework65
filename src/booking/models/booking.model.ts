import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Cart } from "../../cart/models/cart.model";

interface IBookingAttr {
  cart_id: number;
  created_at: Date; // String emas, Date bo'lishi kerak
  finished: Date; // String emas, Date bo'lishi kerak
  payment_method_id: number;
  delivery_method_id: number;
  discount_coupon_id: number;
  status_id: number;
}

@Table({ tableName: "booking", timestamps: false })
export class Booking extends Model<Booking, IBookingAttr> {
  @ApiProperty({
    example: 1,
    description: "Unique ID of the booking status (autoIncrement)",
  })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 1, description: "Card ID" })
  @ForeignKey(()=>Cart)
  @Column({
    type: DataType.INTEGER,
  })
  cartId: number;
  @BelongsTo(()=>Cart)
  cart: Cart;

  @ApiProperty({
    example: "2022-01-01 12:00:00",
    description: "Booking qilingan vaqt",
  })
  @Column({
    type: DataType.DATE,
    field: "created_at",
  })
  createdAt: Date;

  @ApiProperty({
    example: "2022-01-01 12:05:00",
    description: "Booking tugatilgan vaqt",
  })
  @Column({
    type: DataType.DATE,
  })
  finished: Date;

  @ApiProperty({ example: 1, description: "Payment method ID" })
  @Column({
    type: DataType.INTEGER,
    field: "payment_method_id",
  })
  paymentMethodId: number;

  @ApiProperty({ example: 1, description: "Delivery method ID" })
  @Column({
    type: DataType.INTEGER,
    field: "delivery_method_id",
  })
  deliveryMethodId: number;

  @ApiProperty({ example: 1, description: "Discount coupon ID" })
  @Column({
    type: DataType.INTEGER,
    field: "discount_coupon_id",
  })
  discountCouponId: number;

  @ApiProperty({ example: 1, description: "Booking status ID" })
  @Column({
    type: DataType.INTEGER,
    field: "status_id",
  })
  statusId: number;
}
