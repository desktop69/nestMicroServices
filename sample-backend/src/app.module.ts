import { Module } from '@nestjs/common';
import { Transport } from '@nestjs/microservices/enums';
import { ClientsModule } from '@nestjs/microservices/module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ 
    ClientsModule.register([
      {
        name : 'COMMUNICATION',
        transport : Transport.TCP,
      },
      {
        name: 'ANALYTICS',
        transport : Transport.TCP,
        options: { port: 3001},
      },
    ])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
