import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayInit,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { ParkingEntity } from '@root/models/entities/parking.entity';
import { Client } from 'pg';
import { Server, Socket } from 'socket.io';
import { ConfigService } from '@nestjs/config';
import { ParkingsService } from '@root/services';

@WebSocketGateway({
  namespace: 'parkings',
  cors: {
    origin: '*',
  },
})
export class ParkingsGateway implements OnGatewayInit, OnGatewayConnection {
  @WebSocketServer()
  server: Server;
  parkings: ParkingEntity[] = [];
  client: Client;

  constructor(
    private readonly parkingsService: ParkingsService,
    private readonly configService: ConfigService,
  ) {
    this.client = new Client({
      host: this.configService.get<string>('DB_HOST'),
      user: this.configService.get<string>('DB_USERNAME'),
      password: this.configService.get<string>('DB_PASSWORD'),
      database: this.configService.get<string>('DB_DATABASE'),
    });
  }

  async afterInit(_: any) {
    try {
      await this.client.connect();
      await this.client.query('LISTEN parkings_update');
      this.client.on('notification', async (_: any) => {
        this.parkings = await this.parkingsService.findAll();
        this.server.emit('update', this.parkings);
      });
    } catch (e) {
      console.error(e);
    }
  }

  async handleConnection(
    @ConnectedSocket() client: Socket,
    @MessageBody() ..._: any[]
  ) {
    this.parkings = await this.parkingsService.findAll();
    client.emit('update', this.parkings);
  }
}
