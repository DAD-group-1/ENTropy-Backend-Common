import { ApiProperty, PartialType } from '@nestjs/swagger';
import { PaginatedResponseDto } from '../../../../common';

export class CreateGradeRequestDto {
  @ApiProperty({ description: 'The ID of the enrollment' })
  enrollment_id: number;

  @ApiProperty({ description: 'The grade value', nullable: true })
  grade?: number;

  @ApiProperty({ description: 'The name of the grade' })
  name: string;
}

export class UpdateGradeRequestDto extends PartialType(CreateGradeRequestDto) {}

export class GradeResponseDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  enrollment_id: number;

  @ApiProperty({ nullable: true })
  grade?: number;

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
