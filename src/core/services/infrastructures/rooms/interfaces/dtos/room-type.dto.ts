import { ApiProperty } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';
import { PaginationDto } from '../../../../common/dtos/pagination.dto';

export class CreateRoomTypeRequestDto {
  @ApiProperty({ description: 'The name of the room type' })
  name: string;

  @ApiProperty({ description: 'The ID of the campus' })
  campus_id: number;
}

export class UpdateRoomTypeRequestDto extends PartialType(
  CreateRoomTypeRequestDto,
) {}

export class RoomTypeResponseDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  campus_id: number;

  @ApiProperty()
  name: string;
}

export class RoomTypeListResponseDto extends PaginationDto<RoomTypeResponseDto> {}

export class DeleteRoomTypeRequestDto {
  @ApiProperty()
  id: number;
}

// Keep backward compatibility
export class CreateRoomTypeDto extends CreateRoomTypeRequestDto {}
export class UpdateRoomTypeDto extends UpdateRoomTypeRequestDto {}
