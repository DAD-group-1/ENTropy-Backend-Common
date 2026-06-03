import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { CourseStatus } from '../interfaces/course.interface';

@Entity()
export class InternalCourse {
  @PrimaryColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  code: string;
  @Column()
  program_id: number;
  @Column()
  semester: number;
  @Column()
  credits: number;
  @Column()
  total_hours: number;
  @Column()
  instructor_id: number;
  @Column()
  room_id: number;
  @Column()
  status: CourseStatus = CourseStatus.ACTIVE;
  @CreateDateColumn()
  created_at: Date;
  @UpdateDateColumn()
  updated_at: Date;
}
