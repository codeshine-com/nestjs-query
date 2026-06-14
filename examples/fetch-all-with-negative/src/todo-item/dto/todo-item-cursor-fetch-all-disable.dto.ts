import { ObjectType } from '@nestjs/graphql'
import { FilterableField, QueryOptions } from '@codeshine/nestjs-query-graphql'

@ObjectType('TodoItemCursorFetchWithNegativeDisable')
@QueryOptions({ enableTotalCount: true })
export class TodoItemCursorFetchWithNegativeDisableDTO {
  @FilterableField()
  id!: number

  @FilterableField()
  title!: string

  @FilterableField()
  completed: boolean
}
