import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class InternalPermission {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  description: string;
}
