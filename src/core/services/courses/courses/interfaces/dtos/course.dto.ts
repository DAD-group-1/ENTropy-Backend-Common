import { CourseStatus } from '../course.interface';
import { ApiProperty } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';
import { PaginatedResponseDto } from '../../../../common/dtos/pagination.dto';

export class CreateCourseRequestDto {
  @ApiProperty({ description: 'The name of the course' })
  name: string;

  @ApiProperty({ description: 'The course code' })
  code: string;

  @ApiProperty({ description: 'The ID of the program' })
  program_id: number;

  @ApiProperty({ description: 'The semester of the course' })
  semester: number;

  @ApiProperty({ description: 'The number of credits' })
  credits: number;

  @ApiProperty({ description: 'Total hours for the course' })
  total_hours: number;

  @ApiProperty({ description: 'The ID of the instructor' })
  instructor_id: number;

  @ApiProperty({ description: 'The ID of the room' })
  room_id: number;

  @ApiProperty({ description: 'The status of the course', enum: CourseStatus })
  status: CourseStatus;
}

export class UpdateCourseRequestDto extends PartialType(
  CreateCourseRequestDto,
) {}

export class CourseResponseDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  code: string;

  @ApiProperty()
  program_id: number;

  @ApiProperty()
  semester: number;

  @ApiProperty()
  credits: number;

  @ApiProperty()
  total_hours: number;

  @ApiProperty()
  instructor_id: number;

  @ApiProperty()
  room_id: number;

  @ApiProperty()
  status: CourseStatus;

  @ApiProperty()
  created_at: Date;

  @ApiProperty()
  updated_at: Date;
}

export class CourseListResponseDto extends PaginatedResponseDto(
  CourseResponseDto,
) {}

export class DeleteCourseRequestDto {
  @ApiProperty()
  id: number;
}

// Keep backward compatibility
export class CreateCourseDto extends CreateCourseRequestDto {}
export class UpdateCourseDto extends UpdateCourseRequestDto {}
