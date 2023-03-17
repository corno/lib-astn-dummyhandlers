import * as pt from 'pareto-core-types'

import { T } from './types.generated'

import * as g_h from "glo-astn-handlers"

export namespace I {}

export namespace C {
    
    export type DummyRequiredValueHandler = <GAnnotation>($is: {}) => g_h.I.RequiredValueHandler<T.Annotation<GAnnotation>>
}

export namespace F {}