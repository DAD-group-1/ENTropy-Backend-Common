import { ApiProperty, PartialType } from '@nestjs/swagger';
import { PaginatedResponseDto } from '../../../../common/dtos/pagination.dto';

export class CreateSpecializationRequestDto {
  @ApiProperty({ description: 'The name of the specialization' })
  name: string;
}

export class UpdateSpecializationRequestDto extends PartialType(
  CreateSpecializationRequestDto,
) {}

// Response
export class SpecializationResponseDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;
}

export class SpecializationListResponseDto extends PaginatedResponseDto(
  SpecializationResponseDto,
) {}

export class DeleteSpecializationRequestDto {
  @ApiProperty()
  id: number;
}

// Keep backward compatibility
export class CreateSpecializationDto extends CreateSpecializationRequestDto {}
export class UpdateSpecializationDto extends UpdateSpecializationRequestDto {}
