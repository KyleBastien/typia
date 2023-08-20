import typia from "../../../../src";
import { _test_equals } from "../../../internal/_test_equals";
import { TagType } from "../../../structures/TagType";

export const test_equals_TagType = _test_equals<TagType>(TagType)((input) =>
    ((input: any, _exceptionable: boolean = true): input is TagType => {
        const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
            Array.isArray(input.value) &&
            input.value.every(
                (elem: any, _index1: number) =>
                    "object" === typeof elem &&
                    null !== elem &&
                    $io1(elem, true && _exceptionable),
            ) &&
            (1 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                    if (["value"].some((prop: any) => key === prop))
                        return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return false;
                }));
        const $io1 = (input: any, _exceptionable: boolean = true): boolean =>
            "number" === typeof input.int &&
            Number.isFinite(input.int) &&
            Math.floor(input.int) === input.int &&
            "number" === typeof input.uint &&
            Number.isFinite(input.uint) &&
            Math.floor(input.uint) === input.uint &&
            0 <= input.uint &&
            (2 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                    if (["int", "uint"].some((prop: any) => key === prop))
                        return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return false;
                }));
        return "object" === typeof input && null !== input && $io0(input, true);
    })(input),
);