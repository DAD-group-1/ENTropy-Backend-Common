import { InstructorStatus } from '../instructor.interface';
import { PartialType } from '@nestjs/swagger';
import { CreateUserDto, CreateUserResponseDTO } from '../../../users/interfaces/dtos/user.dto';

export class CreateInstructorDto extends CreateUserDto {
  user_id: number;
  department_id: number;
  status: InstructorStatus;
  hire_date: Date;
  specialization_id: number;
}

export class UpdateInstructorDto extends PartialType(CreateInstructorDto) {}

export class CreateTeacherResponseDto {
  user: CreateUserResponseDTO;
  department_id: number;
  status: string;
  hire_date: Date;
  specialization_id: number;
}
