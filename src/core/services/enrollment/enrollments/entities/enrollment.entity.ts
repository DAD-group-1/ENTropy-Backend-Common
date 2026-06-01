import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { EnrollmentStatus } from '../interfaces/enrollment.interface';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class InternalEnrollment {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;
  @ApiProperty()
  @Column()
  student_id: number;
  @ApiProperty()
  @Column()
  course_id: number;
  @ApiProperty()
  @Column()
  semester: any;
  @ApiProperty()
  @Column()
  academic_year: number;
  @ApiProperty()
  @Column()
  status: EnrollmentStatus;
  @ApiProperty()
  @Column()
  enrollment_date: Date;
  @ApiProperty()
  @Column()
  created_at: Date;
  @ApiProperty()
  @Column()
  updated_at: Date;
}
