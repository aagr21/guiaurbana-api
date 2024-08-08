import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  Point,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TrafficLightGroupEntity } from './traffic-light-group.entity';

@Entity({
  name: 'traffic_lights',
})
export class TrafficLightEntity {
  @PrimaryGeneratedColumn({
    name: 'id',
  })
  id?: number;

  @Column({
    type: 'geometry',
    spatialFeatureType: 'Point',
    srid: 4326,
  })
  geom?: Point;

  @Column({
    type: 'varchar',
    name: 'location',
  })
  location?: string;

  @ManyToOne(
    () => TrafficLightGroupEntity,
    (trafficLightGroupEntity) => trafficLightGroupEntity.trafficLights,
  )
  @JoinColumn({
    name: 'traffic_light_group_id',
  })
  trafficLightGroup: TrafficLightGroupEntity;
}
