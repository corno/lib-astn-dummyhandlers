import * as pt from 'pareto-core-types'

import { T } from './types.generated'

import * as g_common from "glo-pareto-common"
import * as g_h from "glo-astn-handlers"

export namespace I {}

export namespace F {
    
    export type CreateDummyRequiredValueHandler = <GAnnotation>($: g_common.T.Null,) => g_h.I.RequiredValueHandler<T.Annotation<GAnnotation>>
}