import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class InternalGrade {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  enrollment_id: number;
  @Column()
  grade: number;
  @Column()
  name: string;
}
