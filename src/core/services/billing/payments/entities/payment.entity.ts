import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { PaymentStatus } from '../interfaces/payment.interface';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class InternalPayment {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;
  @ApiProperty()
  @Column()
  student_id: number;
  @ApiProperty()
  @Column()
  invoice_date: Date;
  @ApiProperty()
  @Column()
  due_date: Date;
  @ApiProperty()
  @Column()
  amount: any;
  @ApiProperty()
  @Column()
  status: PaymentStatus;
  @ApiProperty()
  @Column()
  payment_date: Date;
  @ApiProperty()
  @Column()
  payment_method_id: number;
  @ApiProperty()
  @Column()
  academic_year: number;
  @ApiProperty()
  @Column()
  semester: any;
  @ApiProperty()
  @Column()
  notes: string;
  @ApiProperty()
  @Column()
  created_at: Date;
  @ApiProperty()
  @Column()
  updated_at: Date;
}
