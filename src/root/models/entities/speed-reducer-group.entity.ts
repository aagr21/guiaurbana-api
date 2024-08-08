import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { SpeedReducerEntity } from './speed-reducer.entity';

@Entity({
  name: 'speed_reducers_groups',
})
export class SpeedReducerGroupEntity {
  @PrimaryGeneratedColumn({
    name: 'id',
  })
  id?: number;

  @Column({
    type: 'varchar',
    name: 'year',
  })
  year?: string;

  @OneToMany(
    () => SpeedReducerEntity,
    (speedReducerEntity) => speedReducerEntity.speedReducerGroup,
  )
  speedReducers: SpeedReducerEntity[];
}
