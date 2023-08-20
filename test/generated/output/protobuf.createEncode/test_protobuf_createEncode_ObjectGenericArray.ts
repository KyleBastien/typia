import typia from "../../../../src";
import { _test_protobuf_encode } from "../../../internal/_test_protobuf_encode";
import { ObjectGenericArray } from "../../../structures/ObjectGenericArray";

export const test_protobuf_encode_ObjectGenericArray =
    _test_protobuf_encode<ObjectGenericArray>(ObjectGenericArray)({
        encode: (input: ObjectGenericArray): Uint8Array => {
            const $Sizer = (typia.protobuf.createEncode as any).Sizer;
            const $Writer = (typia.protobuf.createEncode as any).Writer;
            const encoder = (writer: any): any => {
                const $peo0 = (input: any): any => {
                    // property "pagination";
                    writer.uint32(10);
                    writer.fork();
                    $peo1(input.pagination);
                    writer.ldelim();
                    // property "data";
                    if (0 !== input.data.length) {
                        for (const elem of input.data) {
                            writer.uint32(18);
                            writer.fork();
                            $peo2(elem);
                            writer.ldelim();
                        }
                    }
                };
                const $peo1 = (input: any): any => {
                    // property "page";
                    writer.uint32(9);
                    writer.double(input.page);
                    // property "limit";
                    writer.uint32(17);
                    writer.double(input.limit);
                    // property "total_count";
                    writer.uint32(25);
                    writer.double(input.total_count);
                    // property "total_pages";
                    writer.uint32(33);
                    writer.double(input.total_pages);
                };
                const $peo2 = (input: any): any => {
                    // property "name";
                    writer.uint32(10);
                    writer.string(input.name);
                    // property "age";
                    writer.uint32(17);
                    writer.double(input.age);
                };
                const $io1 = (input: any): boolean =>
                    "number" === typeof input.page &&
                    "number" === typeof input.limit &&
                    "number" === typeof input.total_count &&
                    "number" === typeof input.total_pages;
                const $io2 = (input: any): boolean =>
                    "string" === typeof input.name &&
                    "number" === typeof input.age;
                $peo0(input);
                return writer;
            };
            const sizer = encoder(new $Sizer());
            const writer = encoder(new $Writer(sizer));
            return writer.buffer();
        },
        message:
            'syntax = "proto3";\n\nmessage ObjectGenericArray {\n    required ObjectGenericArray.IPagination pagination = 1;\n    repeated ObjectGenericArray.IPerson data = 2;\n    message IPagination {\n        required double page = 1;\n        required double limit = 2;\n        required double total_count = 3;\n        required double total_pages = 4;\n    }\n\n    message IPerson {\n        required string name = 1;\n        required double age = 2;\n    }\n}',
    });