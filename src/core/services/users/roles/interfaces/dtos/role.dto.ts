import {ApiProperty} from '@nestjs/swagger';
import {PartialType} from '@nestjs/mapped-types';

export class CreateRoleDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;
}

export class UpdateRoleDto extends PartialType(CreateRoleDto) {}

export class DeleteRoleDto  {
    @ApiProperty()
    role_id: number;
}
