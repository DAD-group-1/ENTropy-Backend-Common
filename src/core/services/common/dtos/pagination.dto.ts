import { ApiProperty } from '@nestjs/swagger';
import { Type } from '@nestjs/common';

/**
 * Generic pagination DTO for list responses
 * @template T - The type of data items in the list
 */
export class PaginationDto {
  @ApiProperty({ example: 100 })
  total: number;

  @ApiProperty({ example: 1 })
  page: number;

  @ApiProperty({ example: 10 })
  limit: number;

  get totalPages(): number {
    return Math.ceil(this.total / this.limit);
  }

  get hasNextPage(): boolean {
    return this.page < this.totalPages;
  }

  get hasPreviousPage(): boolean {
    return this.page > 1;
  }
}

export function PaginatedResponseDto<T>(classRef: Type<T>) {
  class PaginatedDto extends PaginationDto {
    @ApiProperty({ isArray: true, type: () => classRef })
    items: T[];
  }

  return PaginatedDto;
}

export class PaginationQueryDto {
  @ApiProperty({ example: 1, required: false, type: 'integer', minimum: 1 })
  page: number = 1;

  @ApiProperty({
    example: 10,
    required: false,
    type: 'integer',
    minimum: 1,
    maximum: 100,
  })
  limit: number = 10;
}

export class SearchPaginationQueryDto {
  @ApiProperty({
    description: 'Identifier',
    example: 1,
  })
  id: number;

  @ApiProperty({
    description: 'Pagination query',
  })
  query: PaginationQueryDto;
}
