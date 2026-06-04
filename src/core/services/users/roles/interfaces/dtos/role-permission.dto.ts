import { ApiProperty, PartialType } from '@nestjs/swagger';
import { PaginatedResponseDto } from '../../../../common';

export class CreateRolePermissionRequestDto {
  @ApiProperty({ description: 'The ID of the role' })
  role_id: number;

  @ApiProperty({ description: 'The ID of the permission' })
  permission_id: number;
}

export class UpdateRolePermissionRequestDto extends PartialType(
  CreateRolePermissionRequestDto,
) {}

export class RolePermissionResponseDto {
  @ApiProperty()
  role_id: number;

  @ApiProperty()
  permission_id: number;
}

export class RolePermissionListResponseDto extends PaginatedResponseDto(
  RolePermissionResponseDto,
) {}

export class DeleteRolePermissionRequestDto {
  @ApiProperty()
  role_id: number;

  @ApiProperty()
  permission_id: number;
}

// Keep backward compatibility
export class CreateRolePermissionDto extends CreateRolePermissionRequestDto {}
export class UpdateRolePermissionDto extends UpdateRolePermissionRequestDto {}
