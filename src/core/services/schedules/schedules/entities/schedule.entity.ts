import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, } from 'typeorm';
import { ScheduleStatus } from '../interfaces/schedule.interface';

@Entity()
export class InternalSchedule {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  event_id: number;
  @Column()
  course_id: number;
  @Column()
  instructor_id: number;
  @Column()
  room_id: number;
  @Column()
  start_date: Date;
  @Column()
  end_date: Date;
  @Column()
  semester: number;
  @Column()
  academic_year: number;
  @Column()
  status: ScheduleStatus;
  @Column()
  last_modified: Date;
  @CreateDateColumn()
  created_at: Date;
  @UpdateDateColumn()
  updated_at: Date;
}
