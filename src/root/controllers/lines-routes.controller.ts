import { Body, Controller, Post } from '@nestjs/common';
import { FindLineRouteDto } from '@root/models/dto';
import { LinesRoutesService } from '@root/services';

@Controller('lines-routes')
export class LinesRoutesController {
  constructor(private readonly linesRoutesService: LinesRoutesService) {}

  @Post('/find-line-route')
  async findLineRoute(@Body() findLineRouteDto: FindLineRouteDto) {
    return await this.linesRoutesService.findLineRoute(findLineRouteDto);
  }
}
