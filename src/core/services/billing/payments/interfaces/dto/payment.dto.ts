import { ApiProperty } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';
import { PaymentStatus } from '../payment.interface';

export class CreatePaymentDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  student_id: number;

  @ApiProperty()
  invoice_date: Date;

  @ApiProperty()
  due_date: Date;

  @ApiProperty()
  amount: any;

  @ApiProperty()
  status: PaymentStatus;

  @ApiProperty()
  payment_date: Date;

  @ApiProperty()
  payment_method_id: number;

  @ApiProperty()
  academic_year: number;

  @ApiProperty()
  semester: any;

  @ApiProperty()
  notes: string;

  @ApiProperty()
  created_at: Date;

  @ApiProperty()
  updated_at: Date;
}

export class UpdatePaymentDto extends PartialType(CreatePaymentDto) {}
