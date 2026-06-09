export enum PaymentStatus {
  PAID,
  DELAY,
  CANCELLED,
}

export interface Payment {
  id: number;
  student_id: number;
  invoice_date: Date;
  due_date: Date;
  amount: number;
  status: PaymentStatus;
  payment_date: Date;
  payment_method_id: number;
  academic_year: number;
  semester: number;
  notes: string;
  created_at: Date;
  updated_at: Date;
}
