import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessagesModule } from './messages/messages.module';
import { CpuModule } from './cpu/cpu.module';
import { ComputerModule } from './computer/computer.module';
import { DiskModule } from './disk/disk.module';

@Module({
  imports: [MessagesModule, CpuModule, ComputerModule, DiskModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
