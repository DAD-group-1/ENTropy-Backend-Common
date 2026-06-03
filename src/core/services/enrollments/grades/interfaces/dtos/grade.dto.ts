import { ApiProperty } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';
import { PaginatedResponseDto } from '../../../../common/dtos/pagination.dto';

export class CreateGradeRequestDto {
  @ApiProperty({ description: 'The ID of the enrollment' })
  enrollment_id: number;

  @ApiProperty({ description: 'The grade value' })
  grade: number;

  @ApiProperty({ description: 'The name of the grade' })
  name: string;
}

export class UpdateGradeRequestDto extends PartialType(CreateGradeRequestDto) {}

export class GradeResponseDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  enrollment_id: number;

  @ApiProperty()
  grade: number;

  @ApiProperty()
  name: string;
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
