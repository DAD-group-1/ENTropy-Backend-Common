import { ApiProperty } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';

export class CreateDepartmentDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;
}

export class UpdateDepartmentDto extends PartialType(CreateDepartmentDto) {}
