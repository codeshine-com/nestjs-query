import { Directive, GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql'
import { FilterableField } from '@codeshine/nestjs-query-graphql'

@ObjectType('User')
@Directive('@key(fields: "id")')
export class UserDTO {
  @FilterableField(() => ID)
  id!: number

  @FilterableField()
  name!: string

  @FilterableField()
  email!: string

  @FilterableField(() => GraphQLISODateTime)
  created!: Date

  @FilterableField(() => GraphQLISODateTime)
  updated!: Date
}
