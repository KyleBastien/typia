import typia from "../../../../src";
import { _test_misc_isPrune } from "../../../internal/_test_misc_isPrune";
import { TagDefault } from "../../../structures/TagDefault";

export const test_misc_isPrune_TagDefault = _test_misc_isPrune<TagDefault>(
    TagDefault,
)((input: any): input is TagDefault => {
    const is = (input: any): input is TagDefault => {
        const $is_custom = (typia.misc.createIsPrune as any).is_custom;
        const $io0 = (input: any): boolean =>
            "boolean" === typeof input.boolean &&
            "number" === typeof input.number &&
            Number.isFinite(input.number) &&
            $is_custom("default", "number", "1", input.number) &&
            "string" === typeof input.string &&
            $is_custom("default", "string", "two", input.string) &&
            "string" === typeof input.text &&
            $is_custom(
                "default",
                "string",
                "Very long text, can you understand it?",
                input.text,
            ) &&
            "string" === typeof input.template &&
            RegExp(/^prefix_(.*)/).test(input.template) &&
            $is_custom("default", "string", "prefix_A", input.template) &&
            (("string" === typeof input.boolean_and_number_and_string &&
                $is_custom(
                    "default",
                    "string",
                    "false",
                    input.boolean_and_number_and_string,
                ) &&
                $is_custom(
                    "default",
                    "string",
                    "1",
                    input.boolean_and_number_and_string,
                ) &&
                $is_custom(
                    "default",
                    "string",
                    "two",
                    input.boolean_and_number_and_string,
                )) ||
                ("number" === typeof input.boolean_and_number_and_string &&
                    Number.isFinite(input.boolean_and_number_and_string) &&
                    $is_custom(
                        "default",
                        "number",
                        "false",
                        input.boolean_and_number_and_string,
                    ) &&
                    $is_custom(
                        "default",
                        "number",
                        "1",
                        input.boolean_and_number_and_string,
                    ) &&
                    $is_custom(
                        "default",
                        "number",
                        "two",
                        input.boolean_and_number_and_string,
                    )) ||
                "boolean" === typeof input.boolean_and_number_and_string) &&
            (("string" === typeof input.union_but_boolean &&
                $is_custom(
                    "default",
                    "string",
                    "false",
                    input.union_but_boolean,
                )) ||
                ("number" === typeof input.union_but_boolean &&
                    Number.isFinite(input.union_but_boolean) &&
                    $is_custom(
                        "default",
                        "number",
                        "false",
                        input.union_but_boolean,
                    )) ||
                "boolean" === typeof input.union_but_boolean) &&
            (("string" === typeof input.union_but_number &&
                $is_custom("default", "string", "1", input.union_but_number)) ||
                ("number" === typeof input.union_but_number &&
                    Number.isFinite(input.union_but_number) &&
                    $is_custom(
                        "default",
                        "number",
                        "1",
                        input.union_but_number,
                    )) ||
                "boolean" === typeof input.union_but_number) &&
            (("string" === typeof input.union_but_string &&
                $is_custom(
                    "default",
                    "string",
                    "two",
                    input.union_but_string,
                )) ||
                ("number" === typeof input.union_but_string &&
                    Number.isFinite(input.union_but_string) &&
                    $is_custom(
                        "default",
                        "number",
                        "two",
                        input.union_but_string,
                    )) ||
                "boolean" === typeof input.union_but_string) &&
            "number" === typeof input.vulnerable_range &&
            3 <= input.vulnerable_range &&
            5 >= input.vulnerable_range &&
            $is_custom("default", "number", "7", input.vulnerable_range) &&
            "string" === typeof input.vulnerable_template &&
            RegExp(/^prefix_(.*)/).test(input.vulnerable_template) &&
            $is_custom("default", "string", "two", input.vulnerable_template) &&
            null !== input.boolean_and_number_and_template &&
            undefined !== input.boolean_and_number_and_template &&
            (("number" === typeof input.boolean_and_number_and_template &&
                Number.isFinite(input.boolean_and_number_and_template) &&
                $is_custom(
                    "default",
                    "number",
                    "false",
                    input.boolean_and_number_and_template,
                ) &&
                $is_custom(
                    "default",
                    "number",
                    "1",
                    input.boolean_and_number_and_template,
                ) &&
                $is_custom(
                    "default",
                    "number",
                    "prefix_B",
                    input.boolean_and_number_and_template,
                )) ||
                "boolean" === typeof input.boolean_and_number_and_template ||
                ("string" === typeof input.boolean_and_number_and_template &&
                    RegExp(/^prefix_(.*)/).test(
                        input.boolean_and_number_and_template,
                    ) &&
                    $is_custom(
                        "default",
                        "string",
                        "false",
                        input.boolean_and_number_and_template,
                    ) &&
                    $is_custom(
                        "default",
                        "string",
                        "1",
                        input.boolean_and_number_and_template,
                    ) &&
                    $is_custom(
                        "default",
                        "string",
                        "prefix_B",
                        input.boolean_and_number_and_template,
                    )));
        return "object" === typeof input && null !== input && $io0(input);
    };
    const prune = (input: TagDefault): void => {
        const $is_custom = (typia.misc.createIsPrune as any).is_custom;
        const $po0 = (input: any): any => {
            for (const key of Object.keys(input)) {
                if (
                    "boolean" === key ||
                    "number" === key ||
                    "string" === key ||
                    "text" === key ||
                    "template" === key ||
                    "boolean_and_number_and_string" === key ||
                    "union_but_boolean" === key ||
                    "union_but_number" === key ||
                    "union_but_string" === key ||
                    "vulnerable_range" === key ||
                    "vulnerable_template" === key ||
                    "boolean_and_number_and_template" === key
                )
                    continue;
                delete input[key];
            }
        };
        if ("object" === typeof input && null !== input) $po0(input);
    };
    if (!is(input)) return false;
    prune(input);
    return true;
});