import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { EnrollmentStatus } from '../interfaces/enrollment.interface';

@Entity()
export class InternalEnrollment {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  student_id: number;
  @Column()
  course_id: number;
  @Column()
  semester: any;
  @Column()
  academic_year: number;
  @Column()
  status: EnrollmentStatus;
  @Column()
  enrollment_date: Date;
  @Column()
  created_at: Date;
  @Column()
  updated_at: Date;
}
