import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { DynamicSimple } from "../../../../structures/DynamicSimple";

export const test_json_application_swagger_DynamicSimple =
  _test_json_application("swagger")("DynamicSimple")({
    schemas: [
      {
        $ref: "#/components/schemas/DynamicSimple",
      },
    ],
    components: {
      schemas: {
        DynamicSimple: {
          type: "object",
          properties: {
            value: {
              type: "object",
              properties: {},
              nullable: false,
              "x-typia-jsDocTags": [],
              "x-typia-additionalProperties": {
                "x-typia-required": true,
                "x-typia-optional": false,
                type: "number",
              },
              additionalProperties: {
                "x-typia-required": true,
                "x-typia-optional": false,
                type: "number",
              },
            },
          },
          nullable: false,
          required: ["value"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "swagger",
  });