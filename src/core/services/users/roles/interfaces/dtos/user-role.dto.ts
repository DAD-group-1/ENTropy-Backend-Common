import { ApiProperty } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';

export class CreateUserRoleDto {
  @ApiProperty()
  user_id: number;

  @ApiProperty()
  role_id: number;
}

export class UpdateUserRoleDto extends PartialType(CreateUserRoleDto) {}
