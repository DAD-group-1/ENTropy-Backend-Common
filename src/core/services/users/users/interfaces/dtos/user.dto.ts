import { PartialType } from '@nestjs/swagger';

export class CreateUserDto {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  phone: string;
  birthday: Date;
  campus_id: number;
  created_at: Date;
  updated_at: Date;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}

export class CreateUserResponseDTO {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  birthday: Date;
  campus_id: number;
  is_active: boolean;
}