import {ApiProperty, PartialType} from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ description: 'The first name of the user' })
  first_name: string;

  @ApiProperty({ description: 'The last name of the user' })
  last_name: string;

  @ApiProperty({ description: 'The email address of the user' })
  email: string;

  @ApiProperty({ description: 'The password for the user\'s account' })
  password: string;

  @ApiProperty({ description: 'The phone number of the user' })
  phone: string;

  @ApiProperty({ description: 'The birthday of the user' })
  birthday: Date;

  @ApiProperty({ description: 'The ID of the campus the user is associated with' })
  campus_id: number;

  @ApiProperty({ description: 'Indicates whether the user account is active' })
  created_at: Date;

  @ApiProperty({ description: 'The date and time when the user account was last updated' })
  updated_at: Date;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}

export class CreateUserResponseDTO {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  birthday: Date;
  campus_id: number;
  is_active: boolean;
}