import { ApiProperty } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';

export class CreateProgramTypeDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;
}

export class UpdateProgramTypeDto extends PartialType(CreateProgramTypeDto) {}
