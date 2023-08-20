import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { TagRange } from "../../structures/TagRange";

export const test_assert_TagRange = _test_assert<TagRange>(TagRange)(
    typia.createAssert<TagRange>(),
);