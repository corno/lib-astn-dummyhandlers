import * as pd from 'pareto-core-data'

import * as gproject from "lib-pareto-typescript-project/dist/submodules/project"

const d = pd.d

import { $ as bindings } from "./bindings.api.data"
import { $ as pure } from "./pure.api.data"
import { $ as glossary } from "./glossary.data"

import { external, this_ } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

export const $: gproject.T.Project<pd.SourceLocation> = {
    'author': "Corno",
    'description': "create a handler that does nothing more than consume the message",
    'license': "TBD",

    'dependencies': d({
        "glo-astn-handlers": null,
        "glo-pareto-common": null,
    }),
    'type': ['library', {
        'main': {
            'glossary': {

                'root': glossary,

                'imports': d({
                    "common": external("glo-pareto-common"),
                    "h": external("glo-astn-handlers"),
                }),
            },
            'bindings': {
                'api': {
                    'root': bindings,
                    'imports': d({
                        "this": this_(),
                    }),
                },
                'implementation': ['typescript', null],

            },
            'pure algorithms': {
                'api': {
                    'root': pure,
                    'imports': d({
                        "this": this_(),
                        "common": external("glo-pareto-common"),
                    }),
                },
                'implementation': ['typescript', null],
            },
        },
        'submodules': d({
        }),
        'executables': d({}),
        'test': {
            'dependencies': d({
            }),
            'glossary': {
                'parameters': d({}),
                'types': d({}),
                'builders': d({}),
                'interfaces': d({}),
                'functions': d({}),
            },
            'imports': d({}),
        }
    }],
}