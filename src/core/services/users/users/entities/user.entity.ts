import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class InternalUser {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  first_name: string;
  @Column()
  last_name: string;
  @Column()
  @Index({ unique: true })
  email: string;
  @Column()
  password: string;
  @Column()
  phone: string;
  @Column('date')
  birthday: Date;
  @Column()
  campus_id: number;
  @Column()
  is_active: boolean = true;
  @CreateDateColumn()
  created_at: Date;
  @UpdateDateColumn()
  updated_at: Date;
}
