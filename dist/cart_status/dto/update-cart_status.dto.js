"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCartStatusDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_cart_status_dto_1 = require("./create-cart_status.dto");
class UpdateCartStatusDto extends (0, mapped_types_1.PartialType)(create_cart_status_dto_1.CreateCartStatusDto) {
}
exports.UpdateCartStatusDto = UpdateCartStatusDto;
//# sourceMappingURL=update-cart_status.dto.js.map