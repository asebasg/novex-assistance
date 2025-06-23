import { Status } from '@prisma/client';

export class UpdateAttendanceDto {
    date?: string;
    entryTime?: string;
    exitTime?: string;
    status?: Status;
    employeeId?: number;
}