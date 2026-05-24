import { StudentStatus } from '../student.interface';
import { PartialType } from '@nestjs/swagger';
import { CreateUserDto, CreateUserResponseDTO } from '../../../users/interfaces/dtos/user.dto';

export class CreateStudentDto extends CreateUserDto {
  user_id: number;
  program_id: number;
  enrollment_year: number;
  status: StudentStatus;
  address: string;
  city: string;
  zip_code: string;
  emergency_contact: string;
  emergency_phone: string;
}

export class UpdateStudentDto extends PartialType(CreateStudentDto) {}

export class CreateStudentResponseDto {
  user: CreateUserResponseDTO;
  program_id: number;
  enrollment_year: number;
  status: StudentStatus;
  address: string;
  city: string;
  zip_code: string;
  emergency_contact: string;
  emergency_phone: string;
}
