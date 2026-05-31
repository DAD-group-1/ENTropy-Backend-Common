import { ApiProperty } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';
import { EnrollmentStatus } from '../enrollment.interface';

export class CreateEnrollmentDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  student_id: number;

  @ApiProperty()
  course_id: number;

  @ApiProperty()
  semester: any;

  @ApiProperty()
  academic_year: number;

  @ApiProperty()
  status: EnrollmentStatus;

  @ApiProperty()
  enrollment_date: Date;

  @ApiProperty()
  created_at: Date;

  @ApiProperty()
  updated_at: Date;
}

export class UpdateEnrollmentDto extends PartialType(CreateEnrollmentDto) {}
