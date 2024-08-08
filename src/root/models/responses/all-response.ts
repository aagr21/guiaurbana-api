import {
  BusStopEntity,
  ChannelRouteEntity,
  CityCameraEntity,
  LineNameEntity,
  LineRouteEntity,
  SpeedReducerGroupEntity,
  TrafficLightGroupEntity,
} from '@root/models/entities';

export interface AllResponse {
  busStops: BusStopEntity[];
  cityCameras: CityCameraEntity[];
  linesNames: LineNameEntity[];
  linesRoutes: LineRouteEntity[];
  channelsRoutes: ChannelRouteEntity[];
  speedReducersGroups: SpeedReducerGroupEntity[];
  trafficLightsGroups: TrafficLightGroupEntity[];
}
