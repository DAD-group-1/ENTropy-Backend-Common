import { ApiProperty } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';

export class CreateSpecializationDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;
}

export class UpdateSpecializationDto extends PartialType(
  CreateSpecializationDto,
) {}
