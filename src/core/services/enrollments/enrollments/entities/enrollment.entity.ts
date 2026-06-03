import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';
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
  @CreateDateColumn()
  created_at: Date;
  @UpdateDateColumn()
  updated_at: Date;
}
