import * as pt from 'pareto-core-types'

import * as g_this from "./glossary"

export namespace D {
    
}

export namespace A {
    
    export type createDummyRequiredValueHandler = <GAnnotation>() => g_this.ASYNC.A.C.CreateDummyRequiredValueHandler<GAnnotation>
}

export type API = {
    readonly 'createDummyRequiredValueHandler': A.createDummyRequiredValueHandler
}