import * as pt from 'pareto-core-types'

import * as gglo from "./glossary"


export type CcreateDummyRequiredValueHandler = gglo.FCreateDummyRequiredValueHandler

export type API = {
    createDummyRequiredValueHandler: CcreateDummyRequiredValueHandler
}