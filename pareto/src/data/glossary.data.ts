import * as pd from 'pareto-core-data'

import {
    string,
    null_,
    nested,
    dictionary, member, taggedUnion, types, group,
    array,
    typeReference,
    afunc,
    type,
    optional,
    glossaryParameter,
    inf,
    number,
    externalTypeReference,
    interfaceReference,
    imp,
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"
const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({
        "Annotation": null,
    }),
    'imports': d({
        "common": imp({}),
        "h": imp({ "Annotation": typeReference("Annotation") })
    }),
    'types': d({
        "Annotation": type(glossaryParameter("Annotation")),
    }),
    'type': ['asynchronous', {
        'interfaces': d({}),
        'functions': d({
            "CreateDummyRequiredValueHandler": afunc(externalTypeReference("common", "Null"), null, inf(interfaceReference("h", "RequiredValueHandler"))),
        }),

    }],
}