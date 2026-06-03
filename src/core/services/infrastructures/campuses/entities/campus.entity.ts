import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { CampusStatus } from '../interfaces/campus.interface';

@Entity()
export class InternalCampus {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  address: string;
  @Column()
  city: string;
  @Column()
  zip_code: string;
  @Column()
  region: string;
  @Column()
  director: string;
  @Column()
  phone: string;
  @Column()
  email: string;
  @Column()
  student_capacity: number;
  @Column()
  opening_date: Date;
  @Column()
  status: CampusStatus;
  @CreateDateColumn()
  created_at: Date;
  @UpdateDateColumn()
  updated_at: Date;
}
