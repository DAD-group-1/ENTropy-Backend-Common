import { ApiProperty } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';
import { RoomStatus } from '../interfaces/room.interface';

export class CreateRoomDto {
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

export class UpdateRoomDto extends PartialType(CreateRoomDto) {}
