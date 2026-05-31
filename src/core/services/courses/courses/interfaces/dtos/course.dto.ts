import { CourseStatus } from '../course.interface';
import { ApiProperty } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';

export class CreateCourseDto {
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
  status: CourseStatus = CourseStatus.ACTIVE;

  @ApiProperty()
  created_at: Date;

  @ApiProperty()
  updated_at: Date;
}

export class UpdateCourseDto extends PartialType(CreateCourseDto) {}
