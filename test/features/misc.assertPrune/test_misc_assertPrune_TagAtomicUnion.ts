import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";

export const test_misc_assertPrune_TagAtomicUnion =
    _test_misc_assertPrune<TagAtomicUnion>(TagAtomicUnion)((input) =>
        typia.misc.assertPrune<TagAtomicUnion>(input),
    );