import { Column, Entity, PrimaryColumn } from 'typeorm';
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
  @Column()
  created_at: Date;
  @Column()
  updated_at: Date;
}
