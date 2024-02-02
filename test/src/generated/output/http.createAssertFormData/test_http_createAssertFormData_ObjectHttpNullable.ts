import typia from "typia";

import { _test_http_assertFormData } from "../../../internal/_test_http_assertFormData";
import { ObjectHttpNullable } from "../../../structures/ObjectHttpNullable";

export const test_http_createAssertFormData_ObjectHttpNullable =
  _test_http_assertFormData("ObjectHttpNullable")<ObjectHttpNullable>(
    ObjectHttpNullable,
  )((input: FormData): typia.Resolved<ObjectHttpNullable> => {
    const decode = (input: FormData): typia.Resolved<ObjectHttpNullable> => {
      const $boolean = (typia.http.createAssertFormData as any).boolean;
      const $bigint = (typia.http.createAssertFormData as any).bigint;
      const $number = (typia.http.createAssertFormData as any).number;
      const $string = (typia.http.createAssertFormData as any).string;
      const $array = (typia.http.createAssertFormData as any).array;
      const output = {
        boolean: $boolean(input.get("boolean")),
        bigint: $bigint(input.get("bigint")),
        number: $number(input.get("number")),
        string: $string(input.get("string")),
        constantBoolean: $boolean(input.get("constantBoolean")),
        constantBigint: $bigint(input.get("constantBigint")),
        constantNumber: $number(input.get("constantNumber")),
        constantString: $string(input.get("constantString")),
        nullableArray: $array(
          input.getAll("nullableArray").map((elem: any) => $number(elem)),
          null,
        ),
      };
      return output as any;
    };
    const assert = (input: any): ObjectHttpNullable => {
      const __is = (input: any): input is ObjectHttpNullable => {
        const $io0 = (input: any): boolean =>
          (null === input.boolean || "boolean" === typeof input.boolean) &&
          (null === input.bigint || "bigint" === typeof input.bigint) &&
          (null === input.number ||
            ("number" === typeof input.number &&
              Number.isFinite(input.number) &&
              1 <= input.number)) &&
          (null === input.string || "string" === typeof input.string) &&
          (null === input.constantBoolean || true === input.constantBoolean) &&
          (null === input.constantBigint ||
            BigInt(1) === input.constantBigint ||
            BigInt(2) === input.constantBigint ||
            BigInt(3) === input.constantBigint) &&
          (null === input.constantNumber ||
            3 === input.constantNumber ||
            2 === input.constantNumber ||
            1 === input.constantNumber) &&
          (null === input.constantString ||
            "three" === input.constantString ||
            "two" === input.constantString ||
            "one" === input.constantString) &&
          (null === input.nullableArray ||
            (Array.isArray(input.nullableArray) &&
              input.nullableArray.every(
                (elem: any) =>
                  "number" === typeof elem && Number.isFinite(elem),
              )));
        return "object" === typeof input && null !== input && $io0(input);
      };
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is ObjectHttpNullable => {
          const $guard = (typia.http.createAssertFormData as any).guard;
          const $ao0 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            (null === input.boolean ||
              "boolean" === typeof input.boolean ||
              $guard(_exceptionable, {
                path: _path + ".boolean",
                expected: "(boolean | null)",
                value: input.boolean,
              })) &&
            (null === input.bigint ||
              "bigint" === typeof input.bigint ||
              $guard(_exceptionable, {
                path: _path + ".bigint",
                expected: "(bigint | null)",
                value: input.bigint,
              })) &&
            (null === input.number ||
              ("number" === typeof input.number &&
                (Number.isFinite(input.number) ||
                  $guard(_exceptionable, {
                    path: _path + ".number",
                    expected: "number",
                    value: input.number,
                  })) &&
                (1 <= input.number ||
                  $guard(_exceptionable, {
                    path: _path + ".number",
                    expected: "number & Minimum<1>",
                    value: input.number,
                  }))) ||
              $guard(_exceptionable, {
                path: _path + ".number",
                expected: "((number & Minimum<1>) | null)",
                value: input.number,
              })) &&
            (null === input.string ||
              "string" === typeof input.string ||
              $guard(_exceptionable, {
                path: _path + ".string",
                expected: "(null | string)",
                value: input.string,
              })) &&
            (null === input.constantBoolean ||
              true === input.constantBoolean ||
              $guard(_exceptionable, {
                path: _path + ".constantBoolean",
                expected: "(null | true)",
                value: input.constantBoolean,
              })) &&
            (null === input.constantBigint ||
              BigInt(1) === input.constantBigint ||
              BigInt(2) === input.constantBigint ||
              BigInt(3) === input.constantBigint ||
              $guard(_exceptionable, {
                path: _path + ".constantBigint",
                expected: "(1 | 2 | 3 | null)",
                value: input.constantBigint,
              })) &&
            (null === input.constantNumber ||
              3 === input.constantNumber ||
              2 === input.constantNumber ||
              1 === input.constantNumber ||
              $guard(_exceptionable, {
                path: _path + ".constantNumber",
                expected: "(1 | 2 | 3 | null)",
                value: input.constantNumber,
              })) &&
            (null === input.constantString ||
              "three" === input.constantString ||
              "two" === input.constantString ||
              "one" === input.constantString ||
              $guard(_exceptionable, {
                path: _path + ".constantString",
                expected: '("one" | "three" | "two" | null)',
                value: input.constantString,
              })) &&
            (null === input.nullableArray ||
              ((Array.isArray(input.nullableArray) ||
                $guard(_exceptionable, {
                  path: _path + ".nullableArray",
                  expected: "(Array<number> | null)",
                  value: input.nullableArray,
                })) &&
                input.nullableArray.every(
                  (elem: any, _index1: number) =>
                    ("number" === typeof elem && Number.isFinite(elem)) ||
                    $guard(_exceptionable, {
                      path: _path + ".nullableArray[" + _index1 + "]",
                      expected: "number",
                      value: elem,
                    }),
                )) ||
              $guard(_exceptionable, {
                path: _path + ".nullableArray",
                expected: "(Array<number> | null)",
                value: input.nullableArray,
              }));
          return (
            ((("object" === typeof input && null !== input) ||
              $guard(true, {
                path: _path + "",
                expected: "ObjectHttpNullable",
                value: input,
              })) &&
              $ao0(input, _path + "", true)) ||
            $guard(true, {
              path: _path + "",
              expected: "ObjectHttpNullable",
              value: input,
            })
          );
        })(input, "$input", true);
      return input;
    };
    const output = decode(input);
    return assert(output) as any;
  });