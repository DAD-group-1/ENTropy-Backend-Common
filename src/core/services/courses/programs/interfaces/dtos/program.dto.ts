import { ApiProperty } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';
import { ProgramStatus } from '../program.interface';

export class CreateProgramDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  program_type_id: number;

  @ApiProperty()
  duration_in_years: number;

  @ApiProperty()
  annual_tuition_fee: number;

  @ApiProperty()
  department: string;

  @ApiProperty()
  coordinator: string;

  @ApiProperty()
  max_students: number;

  @ApiProperty()
  status: ProgramStatus;

  @ApiProperty()
  created_at: Date;

  @ApiProperty()
  updated_at: Date;
}

export class UpdateProgramDto extends PartialType(CreateProgramDto) {}
