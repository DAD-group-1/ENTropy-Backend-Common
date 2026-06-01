import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class InternalGrade {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;
  @ApiProperty()
  @Column()
  enrollment_id: number;
  @ApiProperty()
  @Column()
  grade: any;
  @ApiProperty()
  @Column()
  name: string;
}
