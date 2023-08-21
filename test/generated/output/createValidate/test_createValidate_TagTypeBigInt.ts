import typia from "../../../../src";
import { _test_validate } from "../../../internal/_test_validate";
import { TagTypeBigInt } from "../../../structures/TagTypeBigInt";

export const test_validate_TagTypeBigInt = _test_validate(
    "TagTypeBigInt",
)<TagTypeBigInt>(TagTypeBigInt)(
    (input: any): typia.IValidation<TagTypeBigInt> => {
        const errors = [] as any[];
        const __is = (input: any): input is TagTypeBigInt => {
            return (
                "object" === typeof input &&
                null !== input &&
                "bigint" === typeof (input as any).in64 &&
                "bigint" === typeof (input as any).uint64 &&
                BigInt(0) <= (input as any).uint64
            );
        };
        if (false === __is(input)) {
            const $report = (typia.createValidate as any).report(errors);
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is TagTypeBigInt => {
                const $vo0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    [
                        "bigint" === typeof input.in64 ||
                            $report(_exceptionable, {
                                path: _path + ".in64",
                                expected: "bigint",
                                value: input.in64,
                            }),
                        ("bigint" === typeof input.uint64 &&
                            (BigInt(0) <= input.uint64 ||
                                $report(_exceptionable, {
                                    path: _path + ".uint64",
                                    expected: "bigint (@type uint64)",
                                    value: input.uint64,
                                }))) ||
                            $report(_exceptionable, {
                                path: _path + ".uint64",
                                expected: "bigint",
                                value: input.uint64,
                            }),
                    ].every((flag: boolean) => flag);
                return (
                    ((("object" === typeof input && null !== input) ||
                        $report(true, {
                            path: _path + "",
                            expected: "TagTypeBigInt",
                            value: input,
                        })) &&
                        $vo0(input, _path + "", true)) ||
                    $report(true, {
                        path: _path + "",
                        expected: "TagTypeBigInt",
                        value: input,
                    })
                );
            })(input, "$input", true);
        }
        const success = 0 === errors.length;
        return {
            success,
            errors,
            data: success ? input : undefined,
        } as any;
    },
);