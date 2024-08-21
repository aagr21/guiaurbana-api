import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  BusStopEntity,
  ChannelRouteEntity,
  CityCameraEntity,
  EducationCenterGroupEntity,
  LineNameEntity,
  ParkingEntity,
  SpeedReducerEntity,
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
    @InjectRepository(ChannelRouteEntity)
    private readonly channelsRoutesRepository: Repository<ChannelRouteEntity>,
    @InjectRepository(SpeedReducerEntity)
    private readonly speedReducersRepository: Repository<SpeedReducerEntity>,
    @InjectRepository(TrafficLightGroupEntity)
    private readonly trafficLightsGroupsRepository: Repository<TrafficLightGroupEntity>,
    @InjectRepository(EducationCenterGroupEntity)
    private readonly educationCentersGroupsRepository: Repository<EducationCenterGroupEntity>,
    @InjectRepository(ParkingEntity)
    private readonly parkingsRepository: Repository<ParkingEntity>,
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

    const channelsRoutes = await this.channelsRoutesRepository.find({
      order: {
        id: 'ASC',
      },
    });

    const speedReducers = await this.speedReducersRepository.find({
      order: {
        id: 'ASC',
      },
    });

    const trafficLightsGroups = await this.trafficLightsGroupsRepository.find({
      order: {
        id: 'ASC',
      },
      relations: {
        trafficLights: true,
      },
    });

    const educationCentersGroups =
      await this.educationCentersGroupsRepository.find({
        order: {
          id: 'ASC',
        },
        relations: {
          educationCenters: true,
        },
      });

    const parkings = await this.parkingsRepository.find({
      order: {
        id: 'ASC',
      },
    });

    return {
      busStops,
      cityCameras,
      linesNames,
      channelsRoutes,
      speedReducers,
      trafficLightsGroups,
      educationCentersGroups,
      parkings,
    };
  }
}
