import { ApiProperty, PartialType } from '@nestjs/swagger';
import { ScheduleStatus } from '../schedule.interface';
import { PaginatedResponseDto } from '../../../../common/dtos/pagination.dto';

export class CreateScheduleRequestDto {
  @ApiProperty({ description: 'The ID of the event' })
  event_id: number;

  @ApiProperty({ description: 'The ID of the course' })
  course_id: number;

  @ApiProperty({ description: 'The ID of the instructor' })
  instructor_id: number;

  @ApiProperty({ description: 'The ID of the room' })
  room_id: number;

  @ApiProperty({ description: 'The start date and time' })
  start_date: Date;

  @ApiProperty({ description: 'The end date and time' })
  end_date: Date;

  @ApiProperty({ description: 'The semester' })
  semester: number;

  @ApiProperty({ description: 'The academic year' })
  academic_year: number;

  @ApiProperty({ description: 'The schedule status', enum: ScheduleStatus })
  status: ScheduleStatus;
}

export class UpdateScheduleRequestDto extends PartialType(
  CreateScheduleRequestDto,
) {}

export class ScheduleResponseDto {
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
  semester: number;

  @ApiProperty()
  academic_year: number;

  @ApiProperty()
  status: ScheduleStatus;

  @ApiProperty()
  last_modified: Date;

  @ApiProperty()
  created_at: Date;

  @ApiProperty()
  updated_at: Date;
}

export class ScheduleListResponseDto extends PaginatedResponseDto(
  ScheduleResponseDto,
) {}

export class DeleteScheduleRequestDto {
  @ApiProperty()
  id: number;
}

// Keep backward compatibility
export class CreateScheduleDto extends CreateScheduleRequestDto {}
export class UpdateScheduleDto extends UpdateScheduleRequestDto {}
