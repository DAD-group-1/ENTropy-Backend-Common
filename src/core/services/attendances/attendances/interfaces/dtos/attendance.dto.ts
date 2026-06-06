import { ApiProperty, PartialType } from '@nestjs/swagger';
import { AttendanceStatus } from '../attendance.interface';
import { PaginatedResponseDto } from '../../../../common';

// Create Request
export class CreateAttendanceRequestDto {
  @ApiProperty({ description: 'The ID of the schedule' })
  schedule_id: number;

  @ApiProperty({ description: 'The ID of the student' })
  student_id: number;

  @ApiProperty({ description: 'The attendance status', enum: AttendanceStatus })
  status: AttendanceStatus;

  @ApiProperty({
    description: 'Optional note about attendance',
    nullable: true,
  })
  note: string | null;
}

export class UpdateAttendanceRequestDto extends PartialType(
  CreateAttendanceRequestDto,
) {}

export class AttendanceResponseDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  schedule_id: number;

  @ApiProperty()
  student_id: number;

  @ApiProperty()
  status: AttendanceStatus;

  @ApiProperty({ nullable: true })
  note: string | null;

  @ApiProperty()
  created_at: Date;

  @ApiProperty()
  updated_at: Date;
}

export class AttendanceListResponseDto extends PaginatedResponseDto(
  AttendanceResponseDto,
) {}

export class DeleteAttendanceRequestDto {
  @ApiProperty()
  id: number;
}

// Keep backward compatibility
export class CreateAttendanceDto extends CreateAttendanceRequestDto {}
export class UpdateAttendanceDto extends UpdateAttendanceRequestDto {}
