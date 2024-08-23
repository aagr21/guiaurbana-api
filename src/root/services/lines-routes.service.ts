import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindLineRouteDto } from '@root/models/dto';
import { LineRouteEntity } from '@root/models/entities';
import { Repository } from 'typeorm';

@Injectable()
export class LinesRoutesService {
  constructor(
    @InjectRepository(LineRouteEntity)
    private readonly linesRoutesRepository: Repository<LineRouteEntity>,
  ) {}

  async findLineRoute(findLineRouteDto: FindLineRouteDto) {
    const { name, ground } = findLineRouteDto;
    return await this.linesRoutesRepository.findOne({
      where: { name, ground },
    });
  }
}
