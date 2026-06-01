import { Column, Entity, PrimaryColumn } from 'typeorm';
import { StudentStatus } from '../interfaces/student.interface';
import { Exclude } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class InternalStudent {
  @ApiProperty()
  @PrimaryColumn()
  user_id: number;
  @ApiProperty()
  @Column()
  program_id: number;
  @ApiProperty()
  @Column()
  enrollment_year: number;
  @ApiProperty()
  @Column()
  status: StudentStatus = StudentStatus.ACTIVE;
  @ApiProperty()
  @Column()
  address: string;
  @ApiProperty()
  @Column()
  city: string;
  @ApiProperty()
  @Column()
  zip_code: string;
  @ApiProperty()
  @Column()
  @Exclude()
  emergency_contact: string;
  @ApiProperty()
  @Column()
  @Exclude()
  emergency_phone: string;
}
