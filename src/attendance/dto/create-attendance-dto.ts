import { Status } from '@prisma/client';

export class CreateAttendanceDto {
    date: string;
    entryTime: string;
    exitTime: string;
    status: Status;
    employeeId: number;
}
