import {ApiProperty} from '@nestjs/swagger';
import {PartialType} from '@nestjs/mapped-types';
import {PaymentStatus} from '../payment.interface';
import {PaginationDto} from "../../../../common/dtos/pagination.dto";

export class CreatePaymentRequestDto {
  @ApiProperty({ description: 'The ID of the student' })
  student_id: number;

  @ApiProperty({ description: 'The invoice date' })
  invoice_date: Date;

  @ApiProperty({ description: 'The due date for payment' })
  due_date: Date;

  @ApiProperty({ description: 'The payment amount' })
  amount: any;

  @ApiProperty({ description: 'The payment status', enum: PaymentStatus })
  status: PaymentStatus;

  @ApiProperty({ description: 'The actual payment date' })
  payment_date: Date;

  @ApiProperty({ description: 'The ID of the payment method' })
  payment_method_id: number;

  @ApiProperty({ description: 'The academic year' })
  academic_year: number;

  @ApiProperty({ description: 'The semester' })
  semester: any;

  @ApiProperty({ description: 'Additional notes about the payment' })
  notes?: string;
}

export class UpdatePaymentRequestDto extends PartialType(CreatePaymentRequestDto) {}

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

export class PaymentListResponseDto extends PaginationDto<PaymentResponseDto> {}

export class DeletePaymentRequestDto {
  @ApiProperty()
  id: number;
}

// Keep backward compatibility
export class CreatePaymentDto extends CreatePaymentRequestDto {}
export class UpdatePaymentDto extends UpdatePaymentRequestDto {}