import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { MessageDto } from './message.dtos';
import { MessageService } from './message.service';

@Resolver()
export class MessageResolver {
  constructor(private messageService: MessageService) {}

  @Query((_returns) => [MessageDto])
  messages() {
    return this.messageService.findAll();
  }

  @Query((_returns) => String)
  returnFullUrl(shorturl: string) {
    return this.messageService.findByURL(shorturl);
  }

  @Mutation((_returns) => MessageDto)
  message(
    @Args('longurl', { type: () => String }) longurl: string,
    @Args('shorturl', { type: () => String }) shorturl: string,
  ) {
    return this.messageService.save(longurl, shorturl);
  }
}
