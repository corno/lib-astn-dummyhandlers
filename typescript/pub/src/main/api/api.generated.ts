import * as pt from 'pareto-core-types'

import * as gthis from "./glossary"

export type CcreateDummyRequiredValueHandler = gthis.FCreateDummyRequiredValueHandler

export type API = {
    createDummyRequiredValueHandler: CcreateDummyRequiredValueHandler
}