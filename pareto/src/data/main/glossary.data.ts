import * as pd from 'pareto-core-data'

import {
    constructor,
    imp,
    glossaryParameter,
    aExternalInterfaceReference,
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"
const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'glossary parameters': d({
        "Annotation": null,
    }),
    'imports': d({
        "h": imp()
    }),
    'root': {
        'namespaces': d({}),
        'types': d({
        }),
    },
    'asynchronous': {
        'interfaces': d({}),
        'algorithms': d({
            "CreateDummyRequiredValueHandler": constructor(aExternalInterfaceReference("h", "RequiredValueHandler", { "Annotation": glossaryParameter("Annotation") }), {}),
        }),

    },
    'synchronous': {
        'interfaces': d({}),
        'algorithms': d({}),

    },

}