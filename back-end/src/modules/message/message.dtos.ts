import { Field, Int, ObjectType } from '@nestjs/graphql';
import { __Type } from 'graphql';

@ObjectType()
export class MessageDto {
  @Field((_type) => Int, { nullable: true })
  id?: number;

  @Field()
  longurl: string;

  @Field()
  shorturl: string;
}
