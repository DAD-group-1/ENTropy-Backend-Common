import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ScheduleStatus } from '../interfaces/schedule.interface';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class InternalSchedule {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;
  @ApiProperty()
  @Column()
  event_id: number;
  @ApiProperty()
  @Column()
  course_id: number;
  @ApiProperty()
  @Column()
  instructor_id: number;
  @ApiProperty()
  @Column()
  room_id: number;
  @ApiProperty()
  @Column()
  start_date: Date;
  @ApiProperty()
  @Column()
  end_date: Date;
  @ApiProperty()
  @Column()
  semester: any;
  @ApiProperty()
  @Column()
  academic_year: any;
  @ApiProperty()
  @Column()
  status: ScheduleStatus;
  @ApiProperty()
  @Column()
  last_modified: Date;
  @ApiProperty()
  @Column()
  created_at: Date;
  @ApiProperty()
  @Column()
  updated_at: Date;
}
