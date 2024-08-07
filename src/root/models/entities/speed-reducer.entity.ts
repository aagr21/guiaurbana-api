import { Point } from 'geojson';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'speed_reducers',
})
export class SpeedReducerEntity {
  @PrimaryGeneratedColumn({
    name: 'id',
  })
  id?: number;

  @Column({
    name: 'geom',
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

  @Column({
    type: 'varchar',
    name: 'year',
  })
  year?: string;
}
