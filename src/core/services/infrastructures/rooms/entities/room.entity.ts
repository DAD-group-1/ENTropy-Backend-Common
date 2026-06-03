import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';
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
  @CreateDateColumn()
  created_at: Date;
  @UpdateDateColumn()
  updated_at: Date;
}
