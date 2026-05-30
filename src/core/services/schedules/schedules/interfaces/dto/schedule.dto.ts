import { ApiProperty } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';
import { ScheduleStatus } from '../interfaces/schedule.interface';

export class CreateScheduleDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  event_id: number;

  @ApiProperty()
  course_id: number;

  @ApiProperty()
  instructor_id: number;

  @ApiProperty()
  room_id: number;

  @ApiProperty()
  start_date: Date;

  @ApiProperty()
  end_date: Date;

  @ApiProperty()
  semester: any;

  @ApiProperty()
  academic_year: any;

  @ApiProperty()
  status: ScheduleStatus;

  @ApiProperty()
  last_modified: Date;

  @ApiProperty()
  created_at: Date;

  @ApiProperty()
  updated_at: Date;
}

export class UpdateScheduleDto extends PartialType(CreateScheduleDto) {}
