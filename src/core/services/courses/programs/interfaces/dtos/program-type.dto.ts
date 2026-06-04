import { ApiProperty, PartialType } from '@nestjs/swagger';
import { PaginatedResponseDto } from '../../../../common/dtos/pagination.dto';

export class CreateProgramTypeRequestDto {
  @ApiProperty({ description: 'The name of the program type' })
  name: string;
}

export class UpdateProgramTypeRequestDto extends PartialType(
  CreateProgramTypeRequestDto,
) {}

// Response
export class ProgramTypeResponseDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;
}

export class ProgramTypeListResponseDto extends PaginatedResponseDto(
  ProgramTypeResponseDto,
) {}

export class DeleteProgramTypeRequestDto {
  @ApiProperty()
  id: number;
}

// Keep backward compatibility
export class CreateProgramTypeDto extends CreateProgramTypeRequestDto {}
export class UpdateProgramTypeDto extends UpdateProgramTypeRequestDto {}
