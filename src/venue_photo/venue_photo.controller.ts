import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
} from "@nestjs/common";
import { VenuePhotoService } from "./venue_photo.service";
import { CreateVenuePhotoDto } from "./dto/create-venue_photo.dto";
import { UpdateVenuePhotoDto } from "./dto/update-venue_photo.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { FileInterceptor } from "@nestjs/platform-express";
import { VenuePhoto } from "./models/venue_photo.model";

@ApiTags("Obyekt rasmlari")
@Controller("venue-photo")
export class VenuePhotoController {
  constructor(private readonly venuePhotoService: VenuePhotoService) {}

  @ApiOperation({summary:"Obyekt Idsi va rasmini qoshish"})
  @ApiResponse({
    status: 201,
    description: "Obyekt IDsi orqali obyekt rasmlarini qoshish",
    type: String,
  })
  @Post("create")
  @UseInterceptors(FileInterceptor("image"))
  create(
    @Body() createVenuePhotoDto: CreateVenuePhotoDto,
    @UploadedFile() image: any
  ) {
    console.log(image);

    return this.venuePhotoService.create(createVenuePhotoDto, image);
  }

  @ApiOperation({summary:"Obyekt rasmlarini olish"})
  @ApiResponse({
    status: 200,
    description: "Obyekt rasmlarini olish",
    type: VenuePhoto,
  })
  @Get()
  findAll() {
    return this.venuePhotoService.findAll();
  }

  @ApiOperation({summary:"Obyekt rasmlarini ko'rish"})
  @ApiResponse({
    status: 200,
    description: "Obyekt ID si orqali obyekt rasmlarini ko'rish",
    type: VenuePhoto,
  })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.venuePhotoService.findOne(+id);
  }

  @ApiOperation({summary:"Obyekt rasmlarini tahrirlash"})
  @ApiResponse({
    status: 200,
    description: "Obyekt ID si orqali obyekt rasmlarini tahrirlash",
    type: VenuePhoto,
  })
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateVenuePhotoDto: UpdateVenuePhotoDto
  ) {
    return this.venuePhotoService.update(+id, updateVenuePhotoDto);
  }

  @ApiOperation({summary:"Obyekt rasmlarini o'chirish"})
  @ApiResponse({
    status: 200,
    description: "Obyekt ID si orqali obyekt rasmlarini o'chirish",
    type: VenuePhoto,
  })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.venuePhotoService.remove(+id);
  }
}
