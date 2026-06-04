export interface Notification {
  id: number;
  user_id: number;
  title: string;
  message: string;
  target_url?: string;
  created_at: Date;
  updated_at: Date;
  read_at?: Date;
}
