import {
  BusStopEntity,
  ChannelRouteEntity,
  CityCameraEntity,
  LineNameEntity,
  LineRouteEntity,
} from '@root/models/entities';
import { SpeedReducerEntity } from '../entities/speed-reducer.entity';

export interface AllResponse {
  busStops: BusStopEntity[];
  cityCameras: CityCameraEntity[];
  linesNames: LineNameEntity[];
  linesRoutes: LineRouteEntity[];
  channelsRoutes: ChannelRouteEntity[];
  speedReducers: SpeedReducerEntity[];
}
