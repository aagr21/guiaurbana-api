import { Controller, Get } from '@nestjs/common';
import { RootService } from '@root/services/root.service';

@Controller('root')
export class RootController {
  constructor(private readonly rootService: RootService) {}

  @Get()
  async findAll() {
    return await this.rootService.findAll();
  }
}
