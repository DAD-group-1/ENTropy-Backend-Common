export enum EnrollmentStatus {
  IN_PROGRESS = 'In progress',
  VALIDATED = 'Validated',
}

export interface Enrollment {
  id: number;
  student_id: number;
  course_id: number;
  semester: number;
  academic_year: number;
  status: EnrollmentStatus;
  enrollment_date: Date;
  created_at: Date;
  updated_at: Date;
}
