import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { LineString } from 'geojson';

@Entity({
  name: 'channels_routes',
})
export class ChannelRouteEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({
    type: 'geometry',
    name: 'geom',
    spatialFeatureType: 'LineString',
    srid: 4326,
  })
  geom?: LineString;

  @Column({
    type: 'varchar',
    name: 'name',
  })
  name?: string;

  @Column({
    type: 'boolean',
    name: 'is_primary',
  })
  isPrimary?: boolean;

  @Column({
    type: 'varchar',
    name: 'color',
  })
  color?: string;
}
