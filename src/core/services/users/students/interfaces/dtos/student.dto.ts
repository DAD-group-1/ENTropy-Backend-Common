import {StudentStatus} from '../student.interface';
import {ApiProperty, PartialType} from '@nestjs/swagger';
import {CreateUserDto, CreateUserResponseDTO} from '../../../users/interfaces/dtos/user.dto';

export class CreateStudentDto extends CreateUserDto {
  @ApiProperty({ description: 'The ID of the user associated with the student' })
  user_id: number;

  @ApiProperty({ description: 'The ID of the program the student is enrolled in' })
  program_id: number;

  @ApiProperty({ description: 'The year the student enrolled in the program' })
  enrollment_year: number;

  @ApiProperty({ description: 'The current status of the student', enum: StudentStatus })
  status: StudentStatus;

  @ApiProperty({ description: 'The address of the student' })
  address: string;

  @ApiProperty({ description: 'The city where the student resides' })
  city: string;

  @ApiProperty({ description: 'The zip code of the student\'s residence' })
  zip_code: string;

  @ApiProperty({ description: 'The name of the student\'s emergency contact' })
  emergency_contact: string;

  @ApiProperty({ description: 'The phone number of the student\'s emergency contact' })
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
