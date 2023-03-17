
import * as g_h from "glo-astn-handlers"

import { A } from "../api.generated"

export const $$: A.createDummyRequiredValueHandler = () => {
    function createDummyValueHandler<TokenAnnotation>(): g_h.I.ValueHandler<TokenAnnotation> {

        function createDummyObjectHandler(): g_h.I.ObjectHandler<TokenAnnotation> {
            return {
                data: {
                    property: () => {
                        return createDummyRequiredValueHandler()
                    },
                    anonymousProperty: () => {
                        return createDummyValueHandler()
                    },
                },
                end: () => { },
            }
        }
        function createDummyArrayHandler(): g_h.I.ArrayHandler<TokenAnnotation> {
            return {
                data: () => {
                    return createDummyValueHandler()
                },
                end: () => { }
            }
        }
        function createDummyTaggedUnionHandler(): g_h.I.TaggedUnionHandler<TokenAnnotation> {
            return {
                option: () => createDummyRequiredValueHandler(),
                missingOption: () => createDummyRequiredValueHandler(),
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