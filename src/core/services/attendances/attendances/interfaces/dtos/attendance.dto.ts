import { ApiProperty } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';
import { AttendanceStatus } from '../attendance.interface';
import { PaginationDto } from '../../../../common/dtos/pagination.dto';

// Create Request
export class CreateAttendanceRequestDto {
  @ApiProperty({ description: 'The ID of the schedule' })
  schedule_id: number;

  @ApiProperty({ description: 'The ID of the student' })
  student_id: number;

  @ApiProperty({ description: 'The attendance status', enum: AttendanceStatus })
  status: AttendanceStatus;

  @ApiProperty({ description: 'Optional note about attendance' })
  note?: string;
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

  @ApiProperty()
  note: string;

  @ApiProperty()
  created_at: Date;

  @ApiProperty()
  updated_at: Date;
}

export class AttendanceListResponseDto extends PaginationDto<AttendanceResponseDto> {}

export class DeleteAttendanceRequestDto {
  @ApiProperty()
  id: number;
}

// Keep backward compatibility
export class CreateAttendanceDto extends CreateAttendanceRequestDto {}
export class UpdateAttendanceDto extends UpdateAttendanceRequestDto {}
