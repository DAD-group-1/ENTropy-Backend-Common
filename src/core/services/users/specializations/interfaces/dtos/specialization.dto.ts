import {ApiProperty} from '@nestjs/swagger';
import {PartialType} from '@nestjs/mapped-types';
import {PaginationDto} from "../../../../common/dtos/pagination.dto";

export class CreateSpecializationRequestDto {
  @ApiProperty({ description: 'The name of the specialization' })
  name: string;
}

export class UpdateSpecializationRequestDto extends PartialType(CreateSpecializationRequestDto) {}

// Response
export class SpecializationResponseDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;
}

export class SpecializationListResponseDto extends PaginationDto<SpecializationResponseDto> {}

export class DeleteSpecializationRequestDto {
  @ApiProperty()
  id: number;
}

// Keep backward compatibility
export class CreateSpecializationDto extends CreateSpecializationRequestDto {}
export class UpdateSpecializationDto extends UpdateSpecializationRequestDto {}
