import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class InternalRole {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  description: string;
}
