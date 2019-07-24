import { All, BadRequestException, Controller, Param, Query, Req, Res } from '@nestjs/common';
import { InjectProxy, Proxy } from '@nestcloud/proxy';
import * as http from 'request';

@Controller('/:service')
export class AppController {
  constructor(
    @InjectProxy() private readonly proxy: Proxy,
  ) {
  }

  @All()
  async getHello(@Param('service') service: string, @Req() request, @Res() response, @Query('url') url: string): Promise<void> {
    if (service === 'stream') {
      if (url) {
        const stream = http.get(decodeURIComponent(url), {
          headers: {
            'User-Agent': '5sing%E5%8E%9F%E5%88%9B%E9%9F%B3%E4%B9%90/6081002 CFNetwork/978.0.7 Darwin/18.5.0',
            'Accept-Encoding': 'gzip,deflate',
          },
        });
        return stream.pipe(response);
      } else {
        throw new BadRequestException('Please set querystring parameter url');
      }
    }

    await this.proxy.forward(request, response, service);
  }
}
