import * as pd from 'pareto-core-data'

import * as gproject from "lib-pareto-typescript-project/dist/submodules/project"

const d = pd.d

import { $ as api } from "./api.data"
import { $ as glossary } from "./glossary.data"

export const $: gproject.T.Project<pd.SourceLocation> = {
    'author': "Corno",
    'description': "create a handler that does nothing more than consume the message",
    'license': "TBD",

    'dependencies': d({
        "glo-astn-handlers": {},
        "glo-pareto-common": {},
    }),
    'type': ['library', {
        'main': {
            'definition': {
                'glossary': glossary,
                'api': api,
            },
            'implementation': ['manual', {}],
        },
        'submodules': d({
        }),
        'executables': d({}),
        'test': {
            'dependencies': d({
            }),
            'glossary': {
                'functions': d({}),
                'imports': d({}),
                'parameters': d({}),
                'types': d({}),
                'interfaces': d({}),
            },
        }
    }],
}