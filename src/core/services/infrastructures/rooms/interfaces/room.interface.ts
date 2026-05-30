export enum RoomStatus {
}

export interface Room {
  id: number;
  name: string;
  campus_id: number;
  building_id: number;
  floor: any;
  capacity: number;
  room_type_id: number;
  equipement: string;
  status: RoomStatus;
  created_at: Date;
  updated_at: Date;
}

