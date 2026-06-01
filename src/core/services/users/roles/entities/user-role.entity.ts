import {Entity, PrimaryColumn} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class InternalUserRole {
  @ApiProperty()
  @PrimaryColumn()
  user_id: number;
  @ApiProperty()
  @PrimaryColumn()
  role_id: number;
}
