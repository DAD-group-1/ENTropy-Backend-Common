import { Column, Entity, PrimaryColumn } from 'typeorm';
import { CourseStatus } from '../interfaces/course.interface';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class InternalCourse {
  @ApiProperty()
  @PrimaryColumn()
  id: number;
  @ApiProperty()
  @Column()
  name: string;
  @ApiProperty()
  @Column()
  code: string;
  @ApiProperty()
  @Column()
  program_id: number;
  @ApiProperty()
  @Column()
  semester: number;
  @ApiProperty()
  @Column()
  credits: number;
  @ApiProperty()
  @Column()
  total_hours: number;
  @ApiProperty()
  @Column()
  instructor_id: number;
  @ApiProperty()
  @Column()
  room_id: number;
  @ApiProperty()
  @Column()
  status: CourseStatus = CourseStatus.ACTIVE;
  @ApiProperty()
  @Column()
  created_at: Date;
  @ApiProperty()
  @Column()
  updated_at: Date;
}
