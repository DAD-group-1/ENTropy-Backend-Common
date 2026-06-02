import { ApiProperty } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';
import { CampusStatus } from '../campus.interface';
import { PaginationDto } from '../../../../common/dtos/pagination.dto';

export class CreateCampusRequestDto {
  @ApiProperty({ description: 'The name of the campus' })
  name: string;

  @ApiProperty({ description: 'The street address of the campus' })
  address: string;

  @ApiProperty({ description: 'The city where the campus is located' })
  city: string;

  @ApiProperty({ description: 'The postal code' })
  zip_code: string;

  @ApiProperty({ description: 'The region of the campus' })
  region: string;

  @ApiProperty({ description: 'The name of the campus director' })
  director: string;

  @ApiProperty({ description: 'The phone number of the campus' })
  phone: string;

  @ApiProperty({ description: 'The email address of the campus' })
  email: string;

  @ApiProperty({ description: 'The maximum student capacity' })
  student_capacity: number;

  @ApiProperty({ description: 'The opening date of the campus' })
  opening_date: Date;

  @ApiProperty({ description: 'The status of the campus', enum: CampusStatus })
  status: CampusStatus;
}

export class UpdateCampusRequestDto extends PartialType(
  CreateCampusRequestDto,
) {}

export class CampusResponseDto {
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
  status: CampusStatus;

  @ApiProperty()
  created_at: Date;

  @ApiProperty()
  updated_at: Date;
}

export class CampusListResponseDto extends PaginationDto<CampusResponseDto> {}

export class DeleteCampusRequestDto {
  @ApiProperty()
  id: number;
}

// Keep backward compatibility
export class CreateCampuseDto extends CreateCampusRequestDto {}
export class UpdateCampuseDto extends UpdateCampusRequestDto {}
