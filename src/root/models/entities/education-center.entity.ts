import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  Point,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { EducationCenterGroupEntity } from './education-center-group.entity';

@Entity({
  name: 'education_centers',
})
export class EducationCenterEntity {
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
    name: 'name',
  })
  name?: string;

  @ManyToOne(
    () => EducationCenterGroupEntity,
    (educationCenterGroupEntity) => educationCenterGroupEntity.educationCenters,
  )
  @JoinColumn({
    name: 'education_center_group_id',
  })
  educationCenterGroup: EducationCenterGroupEntity;
}
