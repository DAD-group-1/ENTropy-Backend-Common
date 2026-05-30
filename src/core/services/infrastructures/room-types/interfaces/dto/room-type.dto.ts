import { ApiProperty } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';

export class CreateRoomTypeDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  campus_id: number;

  @ApiProperty()
  name: string;
}

export class UpdateRoomTypeDto extends PartialType(CreateRoomTypeDto) {}
