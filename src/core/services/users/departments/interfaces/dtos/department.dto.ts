import { ApiProperty, PartialType } from '@nestjs/swagger';
import { PaginatedResponseDto } from '../../../../common/dtos/pagination.dto';

// Create Request
export class CreateDepartmentRequestDto {
  @ApiProperty({ description: 'The name of the department' })
  name: string;
}

export class UpdateDepartmentRequestDto extends PartialType(
  CreateDepartmentRequestDto,
) {}

export class DepartmentResponseDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;
}

export class DepartmentListResponseDto extends PaginatedResponseDto(
  DepartmentResponseDto,
) {}

export class DeleteDepartmentRequestDto {
  @ApiProperty()
  id: number;
}

// Keep backward compatibility
export class CreateDepartmentDto extends CreateDepartmentRequestDto {}
export class UpdateDepartmentDto extends UpdateDepartmentRequestDto {}
