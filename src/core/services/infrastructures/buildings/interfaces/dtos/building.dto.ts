import { ApiProperty } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';
import { PaginatedResponseDto } from '../../../../common/dtos/pagination.dto';

export class CreateBuildingRequestDto {
  @ApiProperty({ description: 'The name of the building' })
  name: string;

  @ApiProperty({ description: 'The ID of the campus' })
  campus_id: number;
}

export class UpdateBuildingRequestDto extends PartialType(
  CreateBuildingRequestDto,
) {}

export class BuildingResponseDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  campus_id: number;

  @ApiProperty()
  name: string;
}

export class BuildingListResponseDto extends PaginatedResponseDto(
  BuildingResponseDto,
) {}

export class DeleteBuildingRequestDto {
  @ApiProperty()
  id: number;
}

// Keep backward compatibility
export class CreateBuildingDto extends CreateBuildingRequestDto {}
export class UpdateBuildingDto extends UpdateBuildingRequestDto {}
