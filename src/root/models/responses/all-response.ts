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

export interface AllResponse {
  busStops: BusStopEntity[];
  cityCameras: CityCameraEntity[];
  linesNames: LineNameEntity[];
  channelsRoutes: ChannelRouteEntity[];
  speedReducers: SpeedReducerEntity[];
  trafficLightsGroups: TrafficLightGroupEntity[];
  educationCentersGroups: EducationCenterGroupEntity[];
  parkings: ParkingEntity[];
}
