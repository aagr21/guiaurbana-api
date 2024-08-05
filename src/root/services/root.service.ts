import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  BusStopEntity,
  ChannelRouteEntity,
  CityCameraEntity,
  LineNameEntity,
  LineRouteEntity,
} from '@root/models/entities';
import { AllResponse } from '@root/models/responses/all-response';
import { Repository } from 'typeorm';

@Injectable()
export class RootService {
  constructor(
    @InjectRepository(BusStopEntity)
    private readonly busStopsRepository: Repository<BusStopEntity>,
    @InjectRepository(CityCameraEntity)
    private readonly cityCamerasRepository: Repository<CityCameraEntity>,
    @InjectRepository(LineNameEntity)
    private readonly linesNamesRepository: Repository<LineNameEntity>,
    @InjectRepository(LineRouteEntity)
    private readonly linesRoutesRepository: Repository<LineRouteEntity>,
    @InjectRepository(ChannelRouteEntity)
    private readonly channelsRoutesRepository: Repository<ChannelRouteEntity>,
  ) {}

  async findAll(): Promise<AllResponse> {
    const busStops = await this.busStopsRepository.find({
      order: {
        id: 'ASC',
      },
    });

    const cityCameras = await this.cityCamerasRepository.find({
      order: {
        id: 'ASC',
      },
    });

    const linesNames = await this.linesNamesRepository.find({
      order: {
        id: 'ASC',
      },
    });

    const linesRoutes = await this.linesRoutesRepository.find({
      order: {
        id: 'ASC',
      },
    });

    const channelsRoutes = await this.channelsRoutesRepository.find({
      order: {
        id: 'ASC',
      },
    });

    return {
      busStops,
      cityCameras,
      linesNames,
      linesRoutes,
      channelsRoutes,
    };
  }
}
