import { ApiProperty } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';

export class CreateBuildingDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  campus_id: number;

  @ApiProperty()
  name: string;
}

export class UpdateBuildingDto extends PartialType(CreateBuildingDto) {}
