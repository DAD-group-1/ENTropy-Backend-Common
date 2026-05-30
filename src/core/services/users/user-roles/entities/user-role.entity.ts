import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class InternalUserRole {
  @PrimaryColumn()
  user_id: number;
  @Column()
  role_id: number;
}
