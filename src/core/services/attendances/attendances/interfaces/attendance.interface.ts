export enum AttendanceStatus {
  PRESENT = 'PRESENT',
  ABSENT = 'ABSENT',
  LATE = 'LATE',
  EXCUSED = 'EXCUSED',
}

export interface Attendance {
  id: number;
  schedule_id: number;
  student_id: number;
  status: AttendanceStatus;
  note: string;
  created_at: Date;
  updated_at: Date;
}
