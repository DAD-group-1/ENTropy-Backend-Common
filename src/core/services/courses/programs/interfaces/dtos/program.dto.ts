import {ApiProperty} from '@nestjs/swagger';
import {PartialType} from '@nestjs/mapped-types';
import {ProgramStatus} from '../program.interface';
import {PaginationDto} from "../../../../common/dtos/pagination.dto";

export class CreateProgramRequestDto {
  @ApiProperty({ description: 'The name of the program' })
  name: string;

  @ApiProperty({ description: 'The ID of the program type' })
  program_type_id: number;

  @ApiProperty({ description: 'Duration of the program in years' })
  duration_in_years: number;

  @ApiProperty({ description: 'Annual tuition fee' })
  annual_tuition_fee: number;

  @ApiProperty({ description: 'The department offering the program' })
  department: string;

  @ApiProperty({ description: 'The program coordinator name' })
  coordinator: string;

  @ApiProperty({ description: 'Maximum number of students' })
  max_students: number;

  @ApiProperty({ description: 'The status of the program', enum: ProgramStatus })
  status: ProgramStatus;
}

export class UpdateProgramRequestDto extends PartialType(CreateProgramRequestDto) {}

export class ProgramResponseDto {
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

export class ProgramListResponseDto extends PaginationDto<ProgramResponseDto> {}

export class DeleteProgramRequestDto {
  @ApiProperty()
  id: number;
}

// Keep backward compatibility
export class CreateProgramDto extends CreateProgramRequestDto {}
export class UpdateProgramDto extends UpdateProgramRequestDto {}