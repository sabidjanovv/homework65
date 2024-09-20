"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTicketStatusDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_ticket_status_dto_1 = require("./create-ticket_status.dto");
class UpdateTicketStatusDto extends (0, mapped_types_1.PartialType)(create_ticket_status_dto_1.CreateTicketStatusDto) {
}
exports.UpdateTicketStatusDto = UpdateTicketStatusDto;
//# sourceMappingURL=update-ticket_status.dto.js.map