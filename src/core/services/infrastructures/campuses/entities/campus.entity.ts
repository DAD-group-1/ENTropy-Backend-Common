import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CampuseStatus } from '../interfaces/campus.interface';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class InternalCampuse {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;
  @ApiProperty()
  @Column()
  name: string;
  @ApiProperty()
  @Column()
  address: string;
  @ApiProperty()
  @Column()
  city: string;
  @ApiProperty()
  @Column()
  zip_code: string;
  @ApiProperty()
  @Column()
  region: string;
  @ApiProperty()
  @Column()
  director: string;
  @ApiProperty()
  @Column()
  phone: string;
  @ApiProperty()
  @Column()
  email: string;
  @ApiProperty()
  @Column()
  student_capacity: number;
  @ApiProperty()
  @Column()
  opening_date: Date;
  @ApiProperty()
  @Column()
  status: CampuseStatus;
  @ApiProperty()
  @Column()
  created_at: Date;
  @ApiProperty()
  @Column()
  updated_at: Date;
}
