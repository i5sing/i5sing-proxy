import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BootModule } from '@nestcloud/boot';
import { ProxyModule } from '@nestcloud/proxy';
import { NEST_BOOT } from '@nestcloud/common';
import { resolve } from 'path';

@Module({
  imports: [
    BootModule.register(resolve(__dirname, '../'), 'config.yaml'),
    ProxyModule.register({ dependencies: [NEST_BOOT] }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
