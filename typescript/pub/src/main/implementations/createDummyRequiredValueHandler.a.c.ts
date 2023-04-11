
import * as g_h from "glo-astn-handlers"

import { A } from "../api.generated"

export const $$: A.createDummyRequiredValueHandler = () => {
    return {
        'construct': () => {
            function createDummyValueHandler<TokenAnnotation>(): g_h.ASYNC.I.ValueHandler<TokenAnnotation> {

                function createDummyObjectHandler(): g_h.ASYNC.I.ObjectHandler<TokenAnnotation> {
                    return ({
                        'data': {
                            'property': () => createDummyRequiredValueHandler(),
                            'anonymousProperty': () => createDummyValueHandler(),
                        },
                        'end': () => { },
                    })
                }
                function createDummyArrayHandler(): g_h.ASYNC.I.ArrayHandler<TokenAnnotation> {
                    return {
                        'data': () => createDummyValueHandler(),
                        'end': () => { }
                    }
                }
                function createDummyTaggedUnionHandler(): g_h.ASYNC.I.TaggedUnionHandler<TokenAnnotation> {
                    return {
                        'option': () => createDummyRequiredValueHandler(),
                        'missingOption': () => createDummyRequiredValueHandler(),
                    }
                }
                return {
                    'object': () => createDummyObjectHandler(),
                    'array': () => createDummyArrayHandler(),
                    'taggedUnion': () => createDummyTaggedUnionHandler(),
                    'simpleString': () => { },
                    'multilineString': () => { }
                }
            }

            function createDummyRequiredValueHandler<TokenAnnotation>(): g_h.ASYNC.I.RequiredValueHandler<TokenAnnotation> {
                return {
                    'missing': () => { },
                    'exists': createDummyValueHandler()
                }
            }

            return createDummyRequiredValueHandler()
        }
    }
}