/* eslint-disable no-param-reassign */
import {
  FilterableField,
  FilterableCursorConnection,
  BeforeCreateOne,
  BeforeCreateMany,
  BeforeUpdateOne,
  BeforeUpdateMany,
  KeySet,
} from '@codeshine/nestjs-query-graphql';
import { ObjectType, ID, GraphQLISODateTime } from '@nestjs/graphql';
import { CreatedByHook, UpdatedByHook } from '../../hooks';
import { TodoItemDTO } from '../../todo-item/dto/todo-item.dto';

@ObjectType('Tag')
@KeySet(['id'])
@FilterableCursorConnection('todoItems', () => TodoItemDTO)
@BeforeCreateOne(CreatedByHook)
@BeforeCreateMany(CreatedByHook)
@BeforeUpdateOne(UpdatedByHook)
@BeforeUpdateMany(UpdatedByHook)
export class TagDTO {
  @FilterableField(() => ID)
  id!: number;

  @FilterableField()
  name!: string;

  @FilterableField(() => GraphQLISODateTime)
  created!: Date;

  @FilterableField(() => GraphQLISODateTime)
  updated!: Date;

  @FilterableField({ nullable: true })
  createdBy?: string;

  @FilterableField({ nullable: true })
  updatedBy?: string;
}
