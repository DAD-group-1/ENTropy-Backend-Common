import { Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class InternalRolePermission {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  role_id: number;
  @ApiProperty()
  @PrimaryColumn()
  permission_id: number;
}
