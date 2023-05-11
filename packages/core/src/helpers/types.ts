import { CommonFieldComparisonBetweenType, JsonFieldComparisonPathType } from '../interfaces';

export type FilterFn<DTO> = (dto?: DTO) => boolean;

export type ComparisonField<DTO, F extends keyof DTO> =
  | DTO[F]
  | DTO[F][]
  | CommonFieldComparisonBetweenType<DTO[F]>
  | JsonFieldComparisonPathType
  | true
  | false
  | null;
