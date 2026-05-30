export enum ProgramStatus {
  ACTIVE = 'Active',
  INACTIVE = 'Inactive',
}

export interface Program {
  id: number;
  name: string;
  program_type_id: number;
  duration_in_years: number;
  annual_tuition_fee: number;
  department: string;
  coordinator: string;
  max_students: number;
  status: ProgramStatus;
  created_at: Date;
  updated_at: Date;
}

