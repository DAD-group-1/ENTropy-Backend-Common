import {ApiProperty} from '@nestjs/swagger';
import {PartialType} from '@nestjs/mapped-types';
import {RoomStatus} from '../room.interface';
import {PaginationDto} from "../../../../common/dtos/pagination.dto";

export class CreateRoomRequestDto {
  @ApiProperty({ description: 'The name of the room' })
  name: string;

  @ApiProperty({ description: 'The ID of the campus' })
  campus_id: number;

  @ApiProperty({ description: 'The ID of the building' })
  building_id: number;

  @ApiProperty({ description: 'The floor number' })
  floor: any;

  @ApiProperty({ description: 'The seating capacity of the room' })
  capacity: number;

  @ApiProperty({ description: 'The ID of the room type' })
  room_type_id: number;

  @ApiProperty({ description: 'Equipment available in the room' })
  equipement: string;

  @ApiProperty({ description: 'The status of the room', enum: RoomStatus })
  status: RoomStatus;
}

export class UpdateRoomRequestDto extends PartialType(CreateRoomRequestDto) {}

export class RoomResponseDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  campus_id: number;

  @ApiProperty()
  building_id: number;

  @ApiProperty()
  floor: any;

  @ApiProperty()
  capacity: number;

  @ApiProperty()
  room_type_id: number;

  @ApiProperty()
  equipement: string;

  @ApiProperty()
  status: RoomStatus;

  @ApiProperty()
  created_at: Date;

  @ApiProperty()
  updated_at: Date;
}

export class RoomListResponseDto extends PaginationDto<RoomResponseDto> {}

export class DeleteRoomRequestDto {
  @ApiProperty()
  id: number;
}

// Keep backward compatibility
export class CreateRoomDto extends CreateRoomRequestDto {}
export class UpdateRoomDto extends UpdateRoomRequestDto {}

