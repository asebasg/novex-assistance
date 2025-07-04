import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { EmployeeModule } from './employee/employee.module';
import { AttendanceModule } from './attendance/attendance.module';
import { ReportModule } from './report/report.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [UserModule, EmployeeModule, AttendanceModule, ReportModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
