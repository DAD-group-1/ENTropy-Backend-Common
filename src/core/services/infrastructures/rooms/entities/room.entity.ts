import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { RoomStatus } from '../interfaces/room.interface';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class InternalRoom {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;
  @ApiProperty()
  @Column()
  name: string;
  @ApiProperty()
  @Column()
  campus_id: number;
  @ApiProperty()
  @Column()
  building_id: number;
  @ApiProperty()
  @Column()
  floor: any;
  @ApiProperty()
  @Column()
  capacity: number;
  @ApiProperty()
  @Column()
  room_type_id: number;
  @ApiProperty()
  @Column()
  equipement: string;
  @ApiProperty()
  @Column()
  status: RoomStatus;
  @ApiProperty()
  @Column()
  created_at: Date;
  @ApiProperty()
  @Column()
  updated_at: Date;
}
