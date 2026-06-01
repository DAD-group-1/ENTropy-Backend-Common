export interface Notification {
  notification_id: number;
  user_id: number;
  title: string;
  message: string;
  created_at: Date
  read_at?: Date;
}
