import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LineNameEntity } from '@root/models/entities';
import { Repository } from 'typeorm';

@Injectable()
export class LinesNamesService {
  constructor(
    @InjectRepository(LineNameEntity)
    private readonly linesNamesRepository: Repository<LineNameEntity>,
  ) {}

  async find(stopLat?: number, stopLon?: number) {
    let linesNames: LineNameEntity[] = [];
    if (stopLat && stopLon) {
      linesNames = await this.linesNamesRepository
        .query(
          `
                WITH ordered_routes AS (
                SELECT lr.name
                        FROM (
                    SELECT lr.name, 
                    MIN(ST_DistanceSphere(lr.geom, ST_SetSRID(ST_MakePoint(${stopLon}, ${stopLat}), 4326))) AS distance
                    FROM lines_routes lr
                    WHERE ST_DWithin(lr.geom, ST_SetSRID(ST_MakePoint(${stopLon}, ${stopLat}), 4326), 0.00018)
                    GROUP BY lr.name
                    ORDER BY distance ASC
                ) AS lr
            )
            SELECT ln.*
            FROM lines_names ln
            JOIN ordered_routes ordr ON ln.name = ordr.name
            ORDER BY array_position(array(SELECT name FROM ordered_routes), ln.name);
                `,
        )
        .then((res) => {
          return res.map((item: Object) => {
            return {
              id: item['id'],
              name: item['name'],
              imageUrl: item['image_url'],
            };
          });
        });
    } else {
      linesNames = await this.linesNamesRepository.find({
        order: {
          id: 'ASC',
        },
      });
    }
    return linesNames;
  }
}
