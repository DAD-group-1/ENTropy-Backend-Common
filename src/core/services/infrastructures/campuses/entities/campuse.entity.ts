import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CampuseStatus } from '../interfaces/campuse.interface';

@Entity()
export class InternalCampuse {
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
  status: CampuseStatus;
  @Column()
  created_at: Date;
  @Column()
  updated_at: Date;
}
