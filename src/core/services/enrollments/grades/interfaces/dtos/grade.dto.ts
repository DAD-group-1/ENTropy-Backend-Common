import { ApiProperty, PartialType } from '@nestjs/swagger';
import { PaginatedResponseDto } from '../../../../common';
import { EnrollmentResponseDto } from '../../../enrollments/interfaces/dtos/enrollment.dto';

export class CreateGradeRequestDto {
  @ApiProperty({ description: 'The ID of the enrollment' })
  enrollment_id: number;

  @ApiProperty({ type: 'number', description: 'The grade value', nullable: true })
  grade: number | null;

  @ApiProperty({ description: 'The name of the grade' })
  name: string;
}

export class UpdateGradeRequestDto extends PartialType(CreateGradeRequestDto) {}

export class GradeResponseDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  enrollment_id: number;

  @ApiProperty({ type: 'number', nullable: true })
  grade: number | null;

  @ApiProperty()
  name: string;

  @ApiProperty()
  enrollment: EnrollmentResponseDto;
}

export class GradeListResponseDto extends PaginatedResponseDto(
  GradeResponseDto,
) {}

export class DeleteGradeRequestDto {
  @ApiProperty()
  id: number;
}

// Keep backward compatibility
export class CreateGradeDto extends CreateGradeRequestDto {}
export class UpdateGradeDto extends UpdateGradeRequestDto {}
