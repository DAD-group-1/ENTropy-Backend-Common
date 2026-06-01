import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { AttendanceStatus } from '../interfaces/attendance.interface';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class InternalAttendance {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;
  @ApiProperty()
  @Column()
  schedule_id: number;
  @ApiProperty()
  @Column()
  student_id: number;
  @ApiProperty()
  @Column()
  status: AttendanceStatus;
  @ApiProperty()
  @Column()
  note: string;
  @ApiProperty()
  @Column()
  created_at: Date;
  @ApiProperty()
  @Column()
  updated_at: Date;
}
