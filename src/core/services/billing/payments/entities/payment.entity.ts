import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { PaymentStatus } from '../interfaces/payment.interface';

@Entity()
export class InternalPayment {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  student_id: number;
  @Column()
  invoice_date: Date;
  @Column()
  due_date: Date;
  @Column()
  amount: number;
  @Column()
  status: PaymentStatus;
  @Column()
  payment_date: Date;
  @Column()
  payment_method_id: number;
  @Column()
  academic_year: number;
  @Column()
  semester: number;
  @Column()
  notes: string;
  @CreateDateColumn()
  created_at: Date;
  @UpdateDateColumn()
  updated_at: Date;
}
