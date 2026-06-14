import { Inject } from '@nestjs/common'
import { Class } from '@codeshine/nestjs-query-core'

import { getCustomAuthorizerToken } from '../auth'

export const InjectCustomAuthorizer = <DTO>(DTOClass: Class<DTO>): ParameterDecorator =>
  Inject(getCustomAuthorizerToken(DTOClass))
