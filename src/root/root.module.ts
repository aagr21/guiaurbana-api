import { Module } from '@nestjs/common';
import { RootController } from '@root/controllers/root.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  BusStopEntity,
  ChannelRouteEntity,
  CityCameraEntity,
  LineNameEntity,
  LineRouteEntity,
  ParkingEntity,
  SpeedReducerEntity,
  SpeedReducerGroupEntity,
  TrafficLightEntity,
  TrafficLightGroupEntity,
} from '@root/models/entities';
import { ParkingsService, RootService } from '@root/services';
import { ParkingsGateway } from '@root/gateways/parkings.gateway';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      BusStopEntity,
      CityCameraEntity,
      LineNameEntity,
      LineRouteEntity,
      ChannelRouteEntity,
      SpeedReducerEntity,
      SpeedReducerGroupEntity,
      TrafficLightEntity,
      TrafficLightGroupEntity,
      ParkingEntity,
    ]),
  ],
  controllers: [RootController],
  providers: [RootService, ParkingsService, ParkingsGateway],
})
export class RootModule {}
