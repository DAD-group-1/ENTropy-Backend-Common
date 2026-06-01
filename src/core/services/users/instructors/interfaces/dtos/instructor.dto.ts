import {InstructorStatus} from '../instructor.interface';
import {ApiProperty, PartialType} from '@nestjs/swagger';
import {CreateUserRequestDto, UserResponseDto,} from '../../../users/interfaces/dtos/user.dto';
import {PaginationDto} from "../../../../common/dtos/pagination.dto";

export class CreateInstructorRequestDto extends CreateUserRequestDto {
  @ApiProperty({
    description: 'The ID of the department the instructor belongs to',
  })
  department_id: number;

  @ApiProperty({
    description: 'The current status of the instructor',
    enum: InstructorStatus,
  })
  status: InstructorStatus;

  @ApiProperty({ description: 'The date the instructor was hired' })
  hire_date: Date;

  @ApiProperty({ description: "The ID of the instructor's specialization" })
  specialization_id: number;
}

export class UpdateInstructorRequestDto extends PartialType(CreateInstructorRequestDto) {}

export class InstructorResponseDto {
  @ApiProperty()
  user_id: number;

  @ApiProperty()
  department_id: number;

  @ApiProperty()
  status: string;

  @ApiProperty()
  hire_date: Date;

  @ApiProperty()
  specialization_id: number;
}

export class InstructorListResponseDto extends PaginationDto<InstructorResponseDto> {}

export class DeleteInstructorRequestDto {
  @ApiProperty()
  user_id: number;
}

// ============ BACKWARD COMPATIBILITY ============
export class CreateInstructorDto extends CreateInstructorRequestDto {}
export class UpdateInstructorDto extends UpdateInstructorRequestDto {}
export class CreateInstructorResponseDto {
  @ApiProperty()
  user: UserResponseDto;

  @ApiProperty()
  department_id: number;

  @ApiProperty()
  status: string;

  @ApiProperty()
  hire_date: Date;

  @ApiProperty()
  specialization_id: number;
}
