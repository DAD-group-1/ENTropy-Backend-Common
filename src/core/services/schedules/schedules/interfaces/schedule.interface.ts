export enum ScheduleStatus {
  ACTIVE = 1,
  INACTIVE = 2,
  CANCELLED = 3,
}

export interface Schedule {
  id: number;
  event_id: number;
  course_id: number;
  instructor_id: number;
  room_id: number;
  start_date: Date;
  end_date: Date;
  semester: number;
  academic_year: number;
  status: ScheduleStatus;
  created_at: Date;
  updated_at: Date;
}
