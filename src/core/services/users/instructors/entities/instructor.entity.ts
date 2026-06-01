import { Column, Entity, PrimaryColumn } from 'typeorm';
import { InstructorStatus } from '../interfaces/instructor.interface';

@Entity()
export class InternalInstructor {
  @PrimaryColumn()
  user_id: number;
  @Column()
  department_id: number;
  @Column()
  status: InstructorStatus = InstructorStatus.ACTIVE;
  @Column()
  hire_date: Date;
  @Column()
  specialization_id: number;
}
