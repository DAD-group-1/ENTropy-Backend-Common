import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
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
  @Column()
  created_at: Date;
  @Column()
  updated_at: Date;
}
