import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ProgramStatus } from '../interfaces/program.interface';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class InternalProgram {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;
  @ApiProperty()
  @Column()
  name: string;
  @ApiProperty()
  @Column()
  program_type_id: number;
  @ApiProperty()
  @Column()
  duration_in_years: number;
  @ApiProperty()
  @Column()
  annual_tuition_fee: number;
  @ApiProperty()
  @Column()
  department: string;
  @ApiProperty()
  @Column()
  coordinator: string;
  @ApiProperty()
  @Column()
  max_students: number;
  @ApiProperty()
  @Column()
  status: ProgramStatus;
  @ApiProperty()
  @Column()
  created_at: Date;
  @ApiProperty()
  @Column()
  updated_at: Date;
}
