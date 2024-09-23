export class CreateEventDto {
  name: string;
  photo: string;
  start_date: Date; // YYYY-MM-DD - sana korinishi
  start_time: string; // HH:mm:ss - vaqt korinishi
  finish_date: Date;
  finish_time: string;
  info: string;
  eventTypeId: number;
  humanCategoryId: number;
  venueId: number;
  languageId: number;
  release_date: Date;
}
