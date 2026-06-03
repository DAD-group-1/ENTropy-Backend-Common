import { StudentStatus } from '../student.interface';
import { ApiProperty, PartialType } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import {
  CreateUserRequestDto,
  UserResponseDto,
} from '../../../users/interfaces/dtos/user.dto';
import { PaginatedResponseDto } from '../../../../common/dtos/pagination.dto';

export class CreateStudentRequestDto extends CreateUserRequestDto {
  @ApiProperty({
    description: 'The ID of the program the student is enrolled in',
  })
  program_id: number;

  @ApiProperty({ description: 'The year the student enrolled in the program' })
  enrollment_year: number;

  @ApiProperty({
    description: 'The current status of the student',
    enum: StudentStatus,
  })
  status: StudentStatus;

  @ApiProperty({ description: 'The address of the student' })
  address: string;

  @ApiProperty({ description: 'The city where the student resides' })
  city: string;

  @ApiProperty({ description: "The zip code of the student's residence" })
  zip_code: string;

  @ApiProperty({ description: "The name of the student's emergency contact" })
  @Exclude()
  emergency_contact: string;

  @ApiProperty({
    description: "The phone number of the student's emergency contact",
  })
  @Exclude()
  emergency_phone: string;
}

export class UpdateStudentRequestDto extends PartialType(
  CreateStudentRequestDto,
) {}

export class StudentResponseDto {
  @ApiProperty()
  user_id: number;

  @ApiProperty()
  program_id: number;

  @ApiProperty()
  enrollment_year: number;

  @ApiProperty()
  status: StudentStatus;

  @ApiProperty()
  address: string;

  @ApiProperty()
  city: string;

  @ApiProperty()
  zip_code: string;

  @ApiProperty()
  @Exclude()
  emergency_contact: string;

  @ApiProperty()
  @Exclude()
  emergency_phone: string;
}

export class StudentListResponseDto extends PaginatedResponseDto(
  StudentResponseDto,
) {}

export class DeleteStudentRequestDto {
  @ApiProperty()
  user_id: number;
}

export class CreateStudentDto extends CreateStudentRequestDto {}
export class UpdateStudentDto extends UpdateStudentRequestDto {}
export class CreateStudentResponseDto {
  @ApiProperty()
  user: UserResponseDto;

  @ApiProperty()
  program_id: number;

  @ApiProperty()
  enrollment_year: number;

  @ApiProperty()
  status: StudentStatus;

  @ApiProperty()
  address: string;

  @ApiProperty()
  city: string;

  @ApiProperty()
  zip_code: string;

  @ApiProperty()
  @Exclude()
  emergency_contact: string;

  @ApiProperty()
  @Exclude()
  emergency_phone: string;
}
