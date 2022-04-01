import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  @Field((_type) => Int)
  id: number;

  @Column()
  @Field()
  longurl: string;

  @Column()
  @Field()
  shorturl: string;
}
