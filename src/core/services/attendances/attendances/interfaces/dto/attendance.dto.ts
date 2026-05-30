import { ApiProperty } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';
import { AttendanceStatus } from '../interfaces/attendance.interface';

export class CreateAttendanceDto {
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

export class UpdateAttendanceDto extends PartialType(CreateAttendanceDto) {}
