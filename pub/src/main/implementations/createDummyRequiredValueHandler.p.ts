
import * as gh from "glo-astn-handlers"

import { CcreateDummyRequiredValueHandler } from "../api"

export const $$:CcreateDummyRequiredValueHandler = () => {

    function createDummyValueHandler<TokenAnnotation>(): gh.IValueHandler<TokenAnnotation> {

        function createDummyObjectHandler(): gh.IObjectHandler<TokenAnnotation> {
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
        function createDummyArrayHandler(): gh.IArrayHandler<TokenAnnotation> {
            return {
                element: () => {
                    return createDummyValueHandler()
                },
                onEnd: () => { }
            }
        }
        function createDummyTaggedUnionHandler(): gh.ITaggedUnionHandler<TokenAnnotation> {
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

    function createDummyRequiredValueHandler<TokenAnnotation>(): gh.IRequiredValueHandler<TokenAnnotation> {
        return {
            missing: () => {
            },
            exists: createDummyValueHandler()
        }

    }
    return createDummyRequiredValueHandler()
}