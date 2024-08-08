import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { TrafficLightEntity } from './traffic-light.entity';

@Entity({
  name: 'traffic_lights_groups',
})
export class TrafficLightGroupEntity {
  @PrimaryGeneratedColumn({
    name: 'id',
  })
  id?: number;

  @Column({
    type: 'varchar',
    name: 'type',
  })
  type?: string;

  @OneToMany(
    () => TrafficLightEntity,
    (trafficLightEntity) => trafficLightEntity.trafficLightGroup,
  )
  trafficLights: TrafficLightEntity[];
}
