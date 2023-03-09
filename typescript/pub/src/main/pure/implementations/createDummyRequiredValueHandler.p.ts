
import * as gh from "glo-astn-handlers"

import { createDummyRequiredValueHandler } from "../api.generated"

export const $$: createDummyRequiredValueHandler = () => {
    return () => {

        function createDummyValueHandler<TokenAnnotation>(): gh.I.ValueHandler<TokenAnnotation> {

            function createDummyObjectHandler(): gh.I.ObjectHandler<TokenAnnotation> {
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
            function createDummyArrayHandler(): gh.I.ArrayHandler<TokenAnnotation> {
                return {
                    element: () => {
                        return createDummyValueHandler()
                    },
                    onEnd: () => { }
                }
            }
            function createDummyTaggedUnionHandler(): gh.I.TaggedUnionHandler<TokenAnnotation> {
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

        function createDummyRequiredValueHandler<TokenAnnotation>(): gh.I.RequiredValueHandler<TokenAnnotation> {
            return {
                missing: () => {
                },
                exists: createDummyValueHandler()
            }

        }
        return createDummyRequiredValueHandler()
    }
}