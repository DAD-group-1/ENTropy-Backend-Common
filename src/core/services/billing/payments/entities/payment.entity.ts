import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
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
  amount: any;
  @Column()
  status: PaymentStatus;
  @Column()
  payment_date: Date;
  @Column()
  payment_method_id: number;
  @Column()
  academic_year: number;
  @Column()
  semester: any;
  @Column()
  notes: string;
  @Column()
  created_at: Date;
  @Column()
  updated_at: Date;
}
