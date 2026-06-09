import { ApiProperty } from '@nestjs/swagger';
import { PaginatedResponseDto } from './pagination.dto';

/**
 * DTO for temporal queries, containing a start date and an end date.
 */
export class TemporalQueryDto {
  @ApiProperty({
    description: 'The start date of the temporal query',
    example: '2024-01-01T00:00:00.000Z',
  })
  startDate: string;

  @ApiProperty({
    description: 'The end date of the temporal query',
    example: '2024-12-31T23:59:59.999Z',
  })
  endDate: string;
}

export class TemporalPaginatedQueryDto extends PaginatedResponseDto(
  TemporalQueryDto,
) {}

export class TemporalSearchQueryDto extends TemporalQueryDto {
  @ApiProperty({
    description: 'The ID to search for within the temporal range',
    example: 123,
  })
  id: number;
}
