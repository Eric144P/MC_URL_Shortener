import { Controller, Get, Param, Redirect } from '@nestjs/common';
import { MessageService } from './message.service';

@Controller()
export class RouteController {
  constructor(private readonly messageService: MessageService) {}

  @Get(':shorturl')
  @Redirect('')
  async getUrl(@Param('shorturl') shorturl: string) {
    const fullMessage = await this.messageService.findByURL(shorturl);
    return { url: fullMessage.longurl };
  }
}
