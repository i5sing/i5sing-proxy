import { All, Controller, Param, Req, Res } from '@nestjs/common';
import { InjectProxy, Proxy } from '@nestcloud/proxy';

@Controller('/:service')
export class AppController {
  constructor(
    @InjectProxy() private readonly proxy: Proxy,
  ) {
  }

  @All()
  async getHello(@Param('service') service: string, @Req() request, @Res() response): Promise<void> {
    await this.proxy.forward(request, response, service);
  }
}
