"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBookingStatusDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_booking_status_dto_1 = require("./create-booking_status.dto");
class UpdateBookingStatusDto extends (0, mapped_types_1.PartialType)(create_booking_status_dto_1.CreateBookingStatusDto) {
}
exports.UpdateBookingStatusDto = UpdateBookingStatusDto;
//# sourceMappingURL=update-booking_status.dto.js.map