import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ProgramStatus } from '../interfaces/program.interface';

@Entity()
export class InternalProgram {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  program_type_id: number;
  @Column()
  duration_in_years: number;
  @Column()
  annual_tuition_fee: number;
  @Column()
  department: string;
  @Column()
  coordinator: string;
  @Column()
  max_students: number;
  @Column()
  status: ProgramStatus;
  @Column()
  created_at: Date;
  @Column()
  updated_at: Date;
}
