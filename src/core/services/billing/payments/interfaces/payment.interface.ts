export enum PaymentStatus {
}

export interface Payment {
  id: number;
  student_id: number;
  invoice_date: Date;
  due_date: Date;
  amount: any;
  status: PaymentStatus;
  payment_date: Date;
  payment_method_id: number;
  academic year: number;
  semester: any;
  notes: string;
  created_at: Date;
  updated_at: Date;
}

