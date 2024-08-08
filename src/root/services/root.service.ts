import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  BusStopEntity,
  ChannelRouteEntity,
  CityCameraEntity,
  LineNameEntity,
  LineRouteEntity,
  SpeedReducerGroupEntity,
  TrafficLightGroupEntity,
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
    @InjectRepository(SpeedReducerGroupEntity)
    private readonly speedReducersGroupsRepository: Repository<SpeedReducerGroupEntity>,
    @InjectRepository(TrafficLightGroupEntity)
    private readonly trafficLightsGroupsRepository: Repository<TrafficLightGroupEntity>,
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

    const speedReducersGroups = await this.speedReducersGroupsRepository.find({
      order: {
        id: 'ASC',
      },
      relations: {
        speedReducers: true,
      },
    });

    const trafficLightsGroups = await this.trafficLightsGroupsRepository.find({
      relations: {
        trafficLights: true,
      },
    });

    return {
      busStops,
      cityCameras,
      linesNames,
      linesRoutes,
      channelsRoutes,
      speedReducersGroups,
      trafficLightsGroups,
    };
  }
}
