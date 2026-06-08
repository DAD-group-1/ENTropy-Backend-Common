import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreatePermissionDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;
}

export class UpdatePermissionDto extends PartialType(CreatePermissionDto) {}
