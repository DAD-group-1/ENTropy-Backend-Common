import {Column, Entity, PrimaryColumn} from 'typeorm';
import {StudentStatus} from '../interfaces/student.interface';

@Entity()
export class InternalStudent {
    @PrimaryColumn()
    user_id: number;
    @Column()
    program_id: number;
    @Column()
    enrollment_year: number;
    @Column()
    status: StudentStatus;
    @Column()
    address: string;
    @Column()
    city: string;
    @Column()
    zip_code: string;
    @Column()
    emergency_contact: string;
    @Column()
    emergency_phone: string;
}
