import * as pd from 'pareto-core-data'

import {
    aconstructor,
    typeReference,
    type,
    glossaryParameter,
    imp,
    aInterfaceReference,
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"
const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({
        "Annotation": null,
    }),
    'imports': d({
        "h": imp({ "Annotation": typeReference("Annotation")})
    }),
    'types': d({
        "Annotation": type(glossaryParameter("Annotation"))
    }),
    'asynchronous': {
        'interfaces': d({}),
        'algorithms': d({
          "CreateDummyRequiredValueHandler":  aconstructor(aInterfaceReference("h", "RequiredValueHandler"), {}),
        }),
        
    },
    'synchronous': {
        'interfaces': d({}),
        'algorithms': d({}),
        
    },

}