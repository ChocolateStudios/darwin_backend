import { ConnectionsModule } from './connections/connections.module';
import { FoldersModule } from './folders/folders.module';
import { ProcessesModule } from './processes/processes.module';
import { ProfilesModule } from './profiles/profiles.module';
import { TasksModule } from './tasks/tasks.module';
import { UsersModule } from './users/users.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    ConnectionsModule,
    FoldersModule,
    ProcessesModule,
    ProfilesModule,
    TasksModule,
    UsersModule,],
  controllers: [],
  providers: [],
})
export class AppModule { }
