import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
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
  @Column()
  created_at: Date;
  @Column()
  updated_at: Date;
}
