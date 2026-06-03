import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { AttendanceStatus } from '../interfaces/attendance.interface';

@Entity()
export class InternalAttendance {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  schedule_id: number;
  @Column()
  student_id: number;
  @Column()
  status: AttendanceStatus;
  @Column()
  note: string;
  @CreateDateColumn()
  created_at: Date;
  @UpdateDateColumn()
  updated_at: Date;
}
