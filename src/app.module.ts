import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConnectionService } from './shared/services/database-connection.service';
import { BookModule } from './book/book.module';
import { MemberModule } from './member/member.module';
import { RentModule } from './rent/rent.module';
import { RentDetailModule } from './rent-detail/rent-detail.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: DatabaseConnectionService,
    }),
    BookModule,
    MemberModule,
    RentModule,
    RentDetailModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
