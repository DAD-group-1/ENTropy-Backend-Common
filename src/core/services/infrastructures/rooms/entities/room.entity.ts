import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { RoomStatus } from '../interfaces/room.interface';

@Entity()
export class InternalRoom {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  campus_id: number;
  @Column()
  building_id: number;
  @Column()
  floor: any;
  @Column()
  capacity: number;
  @Column()
  room_type_id: number;
  @Column()
  equipement: string;
  @Column()
  status: RoomStatus;
  @Column()
  created_at: Date;
  @Column()
  updated_at: Date;
}
