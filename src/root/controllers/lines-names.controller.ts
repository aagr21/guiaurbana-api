import { Controller, Get, Query } from '@nestjs/common';
import { LinesNamesService } from '@root/services';

@Controller('lines-names')
export class LinesNamesController {
  constructor(private readonly linesNamesService: LinesNamesService) {}

  @Get()
  find(@Query('stop_lat') stopLat: number, @Query('stop_lon') stopLon: number) {
    return this.linesNamesService.find(stopLat, stopLon);
  }
}
