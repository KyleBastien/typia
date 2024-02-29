import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

export const test_misc_createAssertPrune_ConstantAtomicTagged =
  _test_misc_assertPrune("ConstantAtomicTagged")<ConstantAtomicTagged>(
    ConstantAtomicTagged,
  )(typia.misc.createAssertPrune<ConstantAtomicTagged>());
