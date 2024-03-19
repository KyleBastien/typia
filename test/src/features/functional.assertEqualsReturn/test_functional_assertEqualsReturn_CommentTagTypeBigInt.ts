import typia from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsReturn_CommentTagTypeBigInt =
  _test_functional_assertEqualsReturn(TypeGuardError)("CommentTagTypeBigInt")(
    CommentTagTypeBigInt,
  )((p: (input: CommentTagTypeBigInt) => CommentTagTypeBigInt) =>
    typia.functional.assertEqualsReturn(p),
  );