import { ApiProperty, PartialType } from '@nestjs/swagger';
import { PaginatedResponseDto } from '../../../../common/dtos/pagination.dto';

export class CreateUserRoleRequestDto {
  @ApiProperty({ description: 'The ID of the user' })
  user_id: number;

  @ApiProperty({ description: 'The ID of the role' })
  role_id: number;
}

export class UpdateUserRoleRequestDto extends PartialType(
  CreateUserRoleRequestDto,
) {}

export class UserRoleResponseDto {
  @ApiProperty()
  user_id: number;

  @ApiProperty()
  role_id: number;
}

export class UserRoleListResponseDto extends PaginatedResponseDto(
  UserRoleResponseDto,
) {}

export class DeleteUserRoleRequestDto {
  @ApiProperty()
  user_id: number;

  @ApiProperty()
  role_id: number;
}

// Keep backward compatibility
export class CreateUserRoleDto extends CreateUserRoleRequestDto {}
export class UpdateUserRoleDto extends UpdateUserRoleRequestDto {}

export class GetUserRoleDto {
  @ApiProperty({ description: 'The ID of the user' })
  user_id: number;
}

export class AddRoleToUserDto {
  @ApiProperty({ description: 'The ID of the role' })
  role_id: number;
}

export class RemoveUserRoleDto {
  @ApiProperty({ description: 'The ID of the role' })
  role_id: number;
}

export class AssignRolesDto {
  @ApiProperty({ description: 'The ID of the role' })
  role_ids: number[];
}
