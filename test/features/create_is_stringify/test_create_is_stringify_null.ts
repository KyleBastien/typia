import TSON from "../../../src";
import { _test_is_stringify } from "./../is_stringify/_test_is_stringify";

export const test_create_is_stringify_null = _test_is_stringify(
    "null",
    () => null,
    TSON.createIsStringify<null>(),
);
