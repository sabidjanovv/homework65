import { HttpException, HttpStatus } from "@nestjs/common";

export class ValidationException extends HttpException {// HttpException - HTTP sorovlardan kelayotkan qandaydir
  messages: string | Record<string, any>; // xatoliklar yuz beradgan bolsa shularni ushlab olis uchun
  constructor(response: string | Record<string, any>) {
    super(response, HttpStatus.BAD_REQUEST);
    this.messages = response;
  }
}