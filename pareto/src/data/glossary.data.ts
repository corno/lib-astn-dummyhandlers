import * as pd from 'pareto-core-data'

import {
    string,
    null_,
    nested,
    dictionary, member, taggedUnion, types, group,
    array,
    typeReference,
    data,
    func,
    type,
    optional,
    reference,
    glossaryParameter,
    inf,
    parametrizedInterfaceReference,
    number,
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as gglossary from "lib-pareto-typescript-project/dist/submodules/glossary"
const d = pd.d

export const $: gglossary.T.Glossary<pd.SourceLocation> = {
    'functions': d({
        "CreateDummyRequiredValueHandler": func(typeReference("common", "Null"), null, null, inf(parametrizedInterfaceReference("h", { "Annotation": typeReference("Annotation") }, "RequiredValueHandler"))),
    }),
    'parameters': d({
        "Annotation": null,
    }),
    'types': d({
        "Annotation": type(glossaryParameter("Annotation")),
    }),
    'interfaces': d({}),
}