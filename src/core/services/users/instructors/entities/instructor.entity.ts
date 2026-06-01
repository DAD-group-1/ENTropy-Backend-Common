import { Column, Entity, PrimaryColumn } from 'typeorm';
import { InstructorStatus } from '../interfaces/instructor.interface';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class InternalInstructor {
  @ApiProperty()
  @PrimaryColumn()
  user_id: number;
  @ApiProperty()
  @Column()
  department_id: number;
  @ApiProperty()
  @Column()
  status: InstructorStatus = InstructorStatus.ACTIVE;
  @ApiProperty()
  @Column()
  hire_date: Date;
  @ApiProperty()
  @Column()
  specialization_id: number;
}
