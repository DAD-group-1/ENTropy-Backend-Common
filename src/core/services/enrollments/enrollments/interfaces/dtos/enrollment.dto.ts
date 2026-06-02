import {ApiProperty} from '@nestjs/swagger';
import {PartialType} from '@nestjs/mapped-types';
import {EnrollmentStatus} from '../enrollment.interface';
import {PaginationDto} from "../../../../common/dtos/pagination.dto";

export class CreateEnrollmentRequestDto {
  @ApiProperty({ description: 'The ID of the student' })
  student_id: number;

  @ApiProperty({ description: 'The ID of the course' })
  course_id: number;

  @ApiProperty({ description: 'The semester' })
  semester: any;

  @ApiProperty({ description: 'The academic year' })
  academic_year: number;

  @ApiProperty({ description: 'The enrollment status', enum: EnrollmentStatus })
  status: EnrollmentStatus;

  @ApiProperty({ description: 'The enrollment date' })
  enrollment_date: Date;
}

export class UpdateEnrollmentRequestDto extends PartialType(CreateEnrollmentRequestDto) {}

export class EnrollmentResponseDto {
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

export class EnrollmentListResponseDto extends PaginationDto<EnrollmentResponseDto> {}

export class DeleteEnrollmentRequestDto {
  @ApiProperty()
  id: number;
}

// Keep backward compatibility
export class CreateEnrollmentDto extends CreateEnrollmentRequestDto {}
export class UpdateEnrollmentDto extends UpdateEnrollmentRequestDto {}
