import * as pt from 'pareto-core-types'

import { T } from "./datatypes.generated"

import * as g_h from "glo-astn-handlers"

export namespace ASYNC {
    
    export namespace I {}
    
    export namespace A {
        
        
        export namespace C {
            export type CreateDummyRequiredValueHandler<GAnnotation> = () => g_h.ASYNC.I.RequiredValueHandler<T.Annotation<GAnnotation>>
        }
    }
}

export namespace SYNC {}