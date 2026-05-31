export enum CampuseStatus {
  ACTIVE = 'Active',
  INACTIVE = 'Inactive',
}

export interface Campuse {
  id: number;
  name: string;
  address: string;
  city: string;
  zip_code: string;
  region: string;
  director: string;
  phone: string;
  email: string;
  student_capacity: number;
  opening_date: Date;
  status: CampuseStatus;
  created_at: Date;
  updated_at: Date;
}

