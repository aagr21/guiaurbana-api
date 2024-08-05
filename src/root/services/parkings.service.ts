import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ParkingEntity } from '@root/models/entities';
import { Repository } from 'typeorm';

@Injectable()
export class ParkingsService {
  constructor(
    @InjectRepository(ParkingEntity)
    private readonly parkingsRepository: Repository<ParkingEntity>
  ) {}

  async findAll(): Promise<ParkingEntity[]> {
    return await this.parkingsRepository.find({
      order: {
        id: 'ASC'
      },
    });
  }
}
