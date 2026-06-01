import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class InternalRoomType {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  campus_id: number;
  @Column()
  name: string;
}
