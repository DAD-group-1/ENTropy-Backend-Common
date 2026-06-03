export enum RoomStatus {
    BOOKED = 'Booked',
    AVAILABLE = 'Available',
    Unavailable = 'Unavailable',
}

export interface Room {
  id: number;
  name: string;
  campus_id: number;
  building_id: number;
  floor: number;
  capacity: number;
  room_type_id: number;
  equipement: string;
  status: RoomStatus;
  created_at: Date;
  updated_at: Date;
}
