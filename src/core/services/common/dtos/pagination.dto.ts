import { ApiProperty } from '@nestjs/swagger';

/**
 * Generic pagination DTO for list responses
 * @template T - The type of data items in the list
 */
export class PaginationDto<T> {
  @ApiProperty({
    description: 'Array of data items',
    isArray: true,
  })
  items: T[];

  @ApiProperty({
    description: 'Total number of items',
    example: 100,
  })
  total: number;

  @ApiProperty({
    description: 'Current page number',
    example: 1,
  })
  page: number;

  @ApiProperty({
    description: 'Number of items per page',
    example: 10,
  })
  limit: number;

  constructor(items: T[], total: number, page: number, limit: number) {
    this.items = items;
    this.total = total;
    this.page = page;
    this.limit = limit;
  }

  /**
   * Calculate total number of pages
   */
  get totalPages(): number {
    return Math.ceil(this.total / this.limit);
  }

  /**
   * Check if there is a next page
   */
  get hasNextPage(): boolean {
    return this.page < this.totalPages;
  }

  /**
   * Check if there is a previous page
   */
  get hasPreviousPage(): boolean {
    return this.page > 1;
  }
}

export class PaginationQueryDto {
  @ApiProperty({ example: 1, required: false, type: 'integer', minimum: 1 })
  page?: number = 1;

  @ApiProperty({
    example: 10,
    required: false,
    type: 'integer',
    minimum: 1,
    maximum: 100,
  })
  limit?: number = 10;
}
