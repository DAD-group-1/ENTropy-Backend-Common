import { ApiProperty, PartialType } from '@nestjs/swagger';
import { PaginatedResponseDto } from '../../../../common/dtos/pagination.dto';
import {UserResponseDto} from "../../../users/interfaces/dtos/user.dto";

export class CreateRoleRequestDto {
  @ApiProperty({ description: 'The name of the role' })
  name: string;

  @ApiProperty({ description: 'The description of the role' })
  description: string;
}

export class UpdateRoleRequestDto extends PartialType(CreateRoleRequestDto) {}

export class RoleResponseDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;
}

export class RoleListResponseDto extends PaginatedResponseDto(
  RoleResponseDto,
) {}

export class DeleteRoleRequestDto {
  @ApiProperty()
  role_id: number;
}

export class AssignRoleRequestDto{
    @ApiProperty()
    role_id: number;
}

export class AssignRoleResponseDto extends UserResponseDto {}

// Keep backward compatibility
export class CreateRoleDto extends CreateRoleRequestDto {}
export class UpdateRoleDto extends UpdateRoleRequestDto {}
export class DeleteRoleDto extends DeleteRoleRequestDto {}
