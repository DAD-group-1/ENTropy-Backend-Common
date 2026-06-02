import { Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class InternalUserRole {
  @PrimaryColumn()
  user_id: number;
  @PrimaryColumn()
  role_id: number;
}
