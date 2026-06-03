export enum ScheduleStatus {}

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
  last_modified: Date;
  created_at: Date;
  updated_at: Date;
}
