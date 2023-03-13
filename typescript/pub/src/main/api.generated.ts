import * as pt from 'pareto-core-types'

import * as g_common from "glo-pareto-common"
import * as g_this from "./glossary"

export type createDummyRequiredValueHandler = ($: g_common.T.Null, $d: {}) => g_this.F.CreateDummyRequiredValueHandler

export type API = {
    createDummyRequiredValueHandler: createDummyRequiredValueHandler
}