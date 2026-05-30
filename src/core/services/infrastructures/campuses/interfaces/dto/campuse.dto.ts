import { ApiProperty } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';
import { CampuseStatus } from '../campuse.interface';

export class CreateCampuseDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  address: string;

  @ApiProperty()
  city: string;

  @ApiProperty()
  zip_code: string;

  @ApiProperty()
  region: string;

  @ApiProperty()
  director: string;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  student_capacity: number;

  @ApiProperty()
  opening_date: Date;

  @ApiProperty()
  status: CampuseStatus;

  @ApiProperty()
  created_at: Date;

  @ApiProperty()
  updated_at: Date;
}

export class UpdateCampuseDto extends PartialType(CreateCampuseDto) {}
