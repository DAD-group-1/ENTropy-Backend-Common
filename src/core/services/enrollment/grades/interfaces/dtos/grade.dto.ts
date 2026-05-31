import { ApiProperty } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';

export class CreateGradeDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  enrollment_id: number;

  @ApiProperty()
  grade: any;

  @ApiProperty()
  name: string;
}

export class UpdateGradeDto extends PartialType(CreateGradeDto) {}
