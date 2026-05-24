import { InstructorStatus } from '../instructor.interface';
import {ApiProperty, PartialType} from '@nestjs/swagger';
import { CreateUserDto, CreateUserResponseDTO } from '../../../users/interfaces/dtos/user.dto';

export class CreateInstructorDto extends CreateUserDto {
  @ApiProperty({ description: 'The ID of the user associated with the instructor' })
  user_id: number;

  @ApiProperty({ description: 'The ID of the department the instructor belongs to' })
  department_id: number;

  @ApiProperty({ description: 'The current status of the instructor', enum: InstructorStatus })
  status: InstructorStatus;

  @ApiProperty({ description: 'The date the instructor was hired' })
  hire_date: Date;

  @ApiProperty({ description: 'The ID of the instructor\'s specialization' })
  specialization_id: number;
}

export class UpdateInstructorDto extends PartialType(CreateInstructorDto) {}

export class CreateInstructorResponseDto {
  user: CreateUserResponseDTO;
  department_id: number;
  status: string;
  hire_date: Date;
  specialization_id: number;
}
