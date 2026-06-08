import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class InternalGrade {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  enrollment_id: number;
  @Column('integer', { nullable: true })
  grade: number | null;
  @Column()
  name: string;
}
