import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";

export const test_misc_clone_ArrayRepeatedUnionWithTuple =
    _test_misc_clone<ArrayRepeatedUnionWithTuple>(ArrayRepeatedUnionWithTuple)(
        typia.misc.createClone<ArrayRepeatedUnionWithTuple>(),
    );