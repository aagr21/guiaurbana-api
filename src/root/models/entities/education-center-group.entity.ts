import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { EducationCenterEntity } from './education-center.entity';

@Entity({
  name: 'education_centers_groups',
})
export class EducationCenterGroupEntity {
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
    () => EducationCenterEntity,
    (educationCenterEntity) => educationCenterEntity.educationCenterGroup,
  )
  educationCenters: EducationCenterEntity[];
}
