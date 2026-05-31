import { Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class InternalRolePermission {
  @PrimaryGeneratedColumn()
  role_id: number;
  @PrimaryColumn()
  permission_id: number;
}
