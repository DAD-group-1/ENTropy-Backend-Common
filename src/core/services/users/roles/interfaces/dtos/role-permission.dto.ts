import { ApiProperty } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';

export class CreateRolePermissionDto {
  @ApiProperty()
  role_id: number;

  @ApiProperty()
  permission_id: number;
}

export class UpdateRolePermissionDto extends PartialType(
  CreateRolePermissionDto,
) {}
