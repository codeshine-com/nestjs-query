import { Class, FilterFieldComparison } from '@codeshine/nestjs-query-core';
import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IsString, ValidateNested } from 'class-validator';

/** @internal */
let jsonFieldComparison: Class<FilterFieldComparison<Record<string, unknown>>>;

/** @internal */
export function getOrCreateJsonFieldComparison(): Class<FilterFieldComparison<Record<string, unknown>>> {
  if (jsonFieldComparison) {
    return jsonFieldComparison;
  }

  @InputType()
  class JsonFieldComparisonPath {
    @Field({ nullable: false })
    @IsString()
    path!: string;

    @Field({ nullable: false })
    @IsString()
    value!: string;
  }

  @InputType()
  class JsonFieldComparison implements FilterFieldComparison<Record<string, unknown>> {
    @Field(() => JsonFieldComparisonPath, { nullable: true })
    @ValidateNested()
    @Type(() => JsonFieldComparisonPath)
    pathLike?: JsonFieldComparisonPath;
  }
  jsonFieldComparison = JsonFieldComparison;
  return jsonFieldComparison;
}
