import {Column, CreateDateColumn, Entity, Index, PrimaryGeneratedColumn, UpdateDateColumn,} from 'typeorm';
import {Exclude} from "class-transformer";
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class InternalUser {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;
  @ApiProperty()
  @Column()
  first_name: string;
  @ApiProperty()
  @Column()
  last_name: string;
  @ApiProperty()
  @Column()
  @Index({ unique: true })
  email: string;
  @ApiProperty()
  @Column()
  @Exclude()
  password: string;
  @ApiProperty()
  @Column()
  phone: string;
  @ApiProperty()
  @Column('date')
  birthday: Date;
  @ApiProperty()
  @Column()
  campus_id: number;
  @ApiProperty()
  @Column()
  is_active: boolean = true;
  @ApiProperty()
  @CreateDateColumn()
  created_at: Date;
  @ApiProperty()
  @UpdateDateColumn()
  updated_at: Date;
}
