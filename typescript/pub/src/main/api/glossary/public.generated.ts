import * as pt from 'pareto-core-types'

import { T   } from './types.generated'

import * as gcommon from "glo-pareto-common"
import * as gh from "glo-astn-handlers"

export type FCreateDummyRequiredValueHandler = <GPAnnotation>($: gcommon.T.Null,) => gh.IRequiredValueHandler<T.Annotation<GPAnnotation>>