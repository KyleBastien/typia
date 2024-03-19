import typia from "typia";
import { _test_functional_validateFunction } from "../../../internal/_test_functional_validateFunction";
import { ConstantAtomicTagged } from "../../../structures/ConstantAtomicTagged";
export const test_functional_validateFunction_ConstantAtomicTagged =
  _test_functional_validateFunction("ConstantAtomicTagged")(
    ConstantAtomicTagged,
  )(
    (p: (input: ConstantAtomicTagged) => ConstantAtomicTagged) =>
      (
        input: ConstantAtomicTagged,
      ): import("typia").IValidation<ConstantAtomicTagged> => {
        const paramResults = [
          ((input: any): typia.IValidation<ConstantAtomicTagged> => {
            const errors = [] as any[];
            const __is = (input: any): input is ConstantAtomicTagged => {
              const $io0 = (input: any): boolean =>
                ("latest" === input.id ||
                  ("string" === typeof input.id &&
                    /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
                      input.id,
                    ))) &&
                (-1 === input.age ||
                  ("number" === typeof input.age &&
                    Math.floor(input.age) === input.age &&
                    0 <= input.age &&
                    input.age <= 4294967295 &&
                    input.age <= 100));
              return "object" === typeof input && null !== input && $io0(input);
            };
            if (false === __is(input)) {
              const $report = (typia.functional.validateFunction as any).report(
                errors,
              );
              ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): input is ConstantAtomicTagged => {
                const $vo0 = (
                  input: any,
                  _path: string,
                  _exceptionable: boolean = true,
                ): boolean =>
                  [
                    "latest" === input.id ||
                      ("string" === typeof input.id &&
                        (/^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
                          input.id,
                        ) ||
                          $report(_exceptionable, {
                            path: _path + ".id",
                            expected: 'string & Format<"uuid">',
                            value: input.id,
                          }))) ||
                      $report(_exceptionable, {
                        path: _path + ".id",
                        expected: '("latest" | (string & Format<"uuid">))',
                        value: input.id,
                      }),
                    -1 === input.age ||
                      ("number" === typeof input.age &&
                        ((Math.floor(input.age) === input.age &&
                          0 <= input.age &&
                          input.age <= 4294967295) ||
                          $report(_exceptionable, {
                            path: _path + ".age",
                            expected: 'number & Type<"uint32">',
                            value: input.age,
                          })) &&
                        (input.age <= 100 ||
                          $report(_exceptionable, {
                            path: _path + ".age",
                            expected: "number & Maximum<100>",
                            value: input.age,
                          }))) ||
                      $report(_exceptionable, {
                        path: _path + ".age",
                        expected:
                          '((number & Type<"uint32"> & Maximum<100>) | -1)',
                        value: input.age,
                      }),
                  ].every((flag: boolean) => flag);
                return (
                  ((("object" === typeof input && null !== input) ||
                    $report(true, {
                      path: _path + "",
                      expected: "ConstantAtomicTagged",
                      value: input,
                    })) &&
                    $vo0(input, _path + "", true)) ||
                  $report(true, {
                    path: _path + "",
                    expected: "ConstantAtomicTagged",
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
          })(input) as import("typia").IValidation.IFailure,
        ].filter((r: any) => false === r.success);
        if (paramResults.length > 0)
          return {
            success: false,
            errors: paramResults
              .map((r: any, i: any) =>
                r.errors.map((error: any) => ({
                  ...error,
                  path: error.path.replace("$input", `$input.parameters[${i}]`),
                })),
              )
              .flat(),
          };
        const result = ((
          input: any,
        ): typia.IValidation<ConstantAtomicTagged> => {
          const errors = [] as any[];
          const __is = (input: any): input is ConstantAtomicTagged => {
            const $io0 = (input: any): boolean =>
              ("latest" === input.id ||
                ("string" === typeof input.id &&
                  /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
                    input.id,
                  ))) &&
              (-1 === input.age ||
                ("number" === typeof input.age &&
                  Math.floor(input.age) === input.age &&
                  0 <= input.age &&
                  input.age <= 4294967295 &&
                  input.age <= 100));
            return "object" === typeof input && null !== input && $io0(input);
          };
          if (false === __is(input)) {
            const $report = (typia.functional.validateFunction as any).report(
              errors,
            );
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is ConstantAtomicTagged => {
              const $vo0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                [
                  "latest" === input.id ||
                    ("string" === typeof input.id &&
                      (/^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
                        input.id,
                      ) ||
                        $report(_exceptionable, {
                          path: _path + ".id",
                          expected: 'string & Format<"uuid">',
                          value: input.id,
                        }))) ||
                    $report(_exceptionable, {
                      path: _path + ".id",
                      expected: '("latest" | (string & Format<"uuid">))',
                      value: input.id,
                    }),
                  -1 === input.age ||
                    ("number" === typeof input.age &&
                      ((Math.floor(input.age) === input.age &&
                        0 <= input.age &&
                        input.age <= 4294967295) ||
                        $report(_exceptionable, {
                          path: _path + ".age",
                          expected: 'number & Type<"uint32">',
                          value: input.age,
                        })) &&
                      (input.age <= 100 ||
                        $report(_exceptionable, {
                          path: _path + ".age",
                          expected: "number & Maximum<100>",
                          value: input.age,
                        }))) ||
                    $report(_exceptionable, {
                      path: _path + ".age",
                      expected:
                        '((number & Type<"uint32"> & Maximum<100>) | -1)',
                      value: input.age,
                    }),
                ].every((flag: boolean) => flag);
              return (
                ((("object" === typeof input && null !== input) ||
                  $report(true, {
                    path: _path + "",
                    expected: "ConstantAtomicTagged",
                    value: input,
                  })) &&
                  $vo0(input, _path + "", true)) ||
                $report(true, {
                  path: _path + "",
                  expected: "ConstantAtomicTagged",
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
        })(p(input));
        if (!result.success)
          result.errors = result.errors.map((error: any) => ({
            ...error,
            path: error.path.replace("$input", "$input.return"),
          }));
        return result;
      },
  );