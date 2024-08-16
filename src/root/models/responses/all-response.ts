import {
  BusStopEntity,
  ChannelRouteEntity,
  CityCameraEntity,
  EducationCenterGroupEntity,
  LineNameEntity,
  LineRouteEntity,
  ParkingEntity,
  SpeedReducerGroupEntity,
  TrafficLightGroupEntity,
} from '@root/models/entities';

export interface AllResponse {
  busStops: BusStopEntity[];
  cityCameras: CityCameraEntity[];
  linesNames: LineNameEntity[];
  channelsRoutes: ChannelRouteEntity[];
  speedReducersGroups: SpeedReducerGroupEntity[];
  trafficLightsGroups: TrafficLightGroupEntity[];
  educationCentersGroups: EducationCenterGroupEntity[];
  parkings: ParkingEntity[];
}
