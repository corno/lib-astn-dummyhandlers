
import * as g_h from "glo-astn-handlers"

import { createDummyRequiredValueHandler } from "../api.generated"

export const $$: createDummyRequiredValueHandler = () => {
    return () => {

        function createDummyValueHandler<TokenAnnotation>(): g_h.I.ValueHandler<TokenAnnotation> {

            function createDummyObjectHandler(): g_h.I.ObjectHandler<TokenAnnotation> {
                return {
                    property: () => {
                        return createDummyRequiredValueHandler()
                    },
                    anonymousProperty: () => {
                        return createDummyValueHandler()
                    },
                    onEnd: () => { },
                }
            }
            function createDummyArrayHandler(): g_h.I.ArrayHandler<TokenAnnotation> {
                return {
                    element: () => {
                        return createDummyValueHandler()
                    },
                    onEnd: () => { }
                }
            }
            function createDummyTaggedUnionHandler(): g_h.I.TaggedUnionHandler<TokenAnnotation> {
                return {
                    option: () => createDummyRequiredValueHandler(),
                    missingOption: () => createDummyRequiredValueHandler(),
                    onEnd: () => { }
                }
            }
            return {
                object: () => {
                    return createDummyObjectHandler()
                },
                array: () => {
                    return createDummyArrayHandler()
                },
                taggedUnion: () => {
                    return createDummyTaggedUnionHandler()
                },
                simpleString: () => {
                },
                multilineString: () => {

                }
            }
        }

        function createDummyRequiredValueHandler<TokenAnnotation>(): g_h.I.RequiredValueHandler<TokenAnnotation> {
            return {
                missing: () => {
                },
                exists: createDummyValueHandler()
            }

        }
        return createDummyRequiredValueHandler()
    }
}