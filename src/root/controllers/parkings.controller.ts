import { Controller, Get } from '@nestjs/common';
import { ParkingsService } from '@root/services';

@Controller('parkings')
export class ParkingsController {
    constructor(
        private readonly parkingsService: ParkingsService,
    ){}

    @Get()
    async findAll() {
        return this.parkingsService.findAll();
    }
}
