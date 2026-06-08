import { ApiProperty, PartialType } from '@nestjs/swagger';
import { PaymentStatus } from '../payment.interface';
import { PaginatedResponseDto } from '../../../../common';

export class CreatePaymentRequestDto {
  @ApiProperty({ description: 'The ID of the student' })
  student_id: number;

  @ApiProperty({ description: 'The invoice date' })
  invoice_date: Date;

  @ApiProperty({ description: 'The due date for payment' })
  due_date: Date;

  @ApiProperty({ description: 'The payment amount' })
  amount: number;

  @ApiProperty({ description: 'The payment status', enum: PaymentStatus })
  status: PaymentStatus;

  @ApiProperty({ description: 'The actual payment date', nullable: true })
  payment_date: Date | null;

  @ApiProperty({ description: 'The ID of the payment method' })
  payment_method_id: number;

  @ApiProperty({ description: 'The academic year' })
  academic_year: number;

  @ApiProperty({ description: 'The semester' })
  semester: number;

  @ApiProperty({ description: 'Additional notes about the payment' })
  notes?: string;
}

export class UpdatePaymentRequestDto extends PartialType(
  CreatePaymentRequestDto,
) {}

// Response
export class PaymentResponseDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  student_id: number;

  @ApiProperty()
  invoice_date: Date;

  @ApiProperty()
  due_date: Date;

  @ApiProperty()
  amount: number;

  @ApiProperty()
  status: PaymentStatus;

  @ApiProperty({ nullable: true })
  payment_date: Date | null;

  @ApiProperty()
  payment_method_id: number;

  @ApiProperty()
  academic_year: number;

  @ApiProperty()
  semester: number;

  @ApiProperty()
  notes: string;

  @ApiProperty()
  created_at: Date;

  @ApiProperty()
  updated_at: Date;
}

export class PaymentListResponseDto extends PaginatedResponseDto(
  PaymentResponseDto,
) {}

export class DeletePaymentRequestDto {
  @ApiProperty()
  id: number;
}

// Keep backward compatibility
export class CreatePaymentDto extends CreatePaymentRequestDto {}
export class UpdatePaymentDto extends UpdatePaymentRequestDto {}
