import { ID, ObjectType } from '@nestjs/graphql'
import { FilterableField } from '@codeshine/nestjs-query-graphql'

@ObjectType()
export class TestRelationDTO {
  @FilterableField(() => ID)
  id!: string

  @FilterableField()
  testResolverId!: string
}
