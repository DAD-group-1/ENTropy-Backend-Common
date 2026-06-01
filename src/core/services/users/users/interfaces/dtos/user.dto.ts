import {ApiProperty, PartialType} from '@nestjs/swagger';
import {Exclude} from 'class-transformer';
import {PaginationDto} from "../../../../common/dtos/pagination.dto";

export class CreateUserRequestDto {
  @ApiProperty({ description: 'The first name of the user' })
  first_name: string;

  @ApiProperty({ description: 'The last name of the user' })
  last_name: string;

  @ApiProperty({ description: 'The email address of the user' })
  email: string;

  @ApiProperty({ description: "The password for the user's account" })
  @Exclude()
  password: string;

  @ApiProperty({ description: 'The phone number of the user' })
  phone: string;

  @ApiProperty({ description: 'The birthday of the user' })
  birthday: Date;

  @ApiProperty({
    description: 'The ID of the campus the user is associated with',
  })
  campus_id: number;
}

export class UpdateUserRequestDto extends PartialType(CreateUserRequestDto) {}

export class UserResponseDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  first_name: string;

  @ApiProperty()
  last_name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  birthday: Date;

  @ApiProperty()
  campus_id: number;

  @ApiProperty()
  is_active: boolean;

  @ApiProperty()
  created_at: Date;

  @ApiProperty()
  updated_at: Date;
}

export class UserListResponseDto extends PaginationDto<UserResponseDto> {}

export class DeleteUserRequestDto {
  @ApiProperty()
  id: number;
}

// ============ BACKWARD COMPATIBILITY ============
export class CreateUserDto extends CreateUserRequestDto {}
export class UpdateUserDto extends UpdateUserRequestDto {}
export class CreateUserResponseDTO extends UserResponseDto {}
