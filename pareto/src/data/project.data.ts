import * as pd from 'pareto-core-data'

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"
import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d

import { $ as pure } from "./pure.api.data"
import { $ as glossary } from "./glossary.data"

import { external, this_ } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"


export const $: g_project.T.Project<pd.SourceLocation> = {
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
            'api': {
                'root': pure,
                'imports': d({
                    "this": this_(),
                    "common": external("glo-pareto-common"),
                }),
            },
            'implementation': ['typescript', null],
        },
        'submodules': d({}),
        'bindings': [false],
        'executables': d({}),
        'test': {
            'dependencies': d({
            }),
            'glossary': {
                'parameters': d({}),
                'imports': d({}),
                'types': d({}),
                'type': ['synchronous', {
                    'builders': d({}),
                    'functions': d<g_glossary.T.Glossary._ltype.synchronous.functions.D<pd.SourceLocation>>({}),
                }],
            },
            'imports': d({}),
        }
    }],
}