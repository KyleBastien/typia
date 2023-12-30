import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectUnionDouble } from "../../../../structures/ObjectUnionDouble";

export const test_json_application_swagger_ObjectUnionDouble =
  _test_json_application("swagger")("ObjectUnionDouble")({
    schemas: [
      {
        $ref: "#/components/schemas/ObjectUnionDouble",
      },
    ],
    components: {
      schemas: {
        ObjectUnionDouble: {
          type: "array",
          items: {
            $ref: "#/components/schemas/ObjectUnionDouble.Union",
          },
        },
        "ObjectUnionDouble.Union": {
          oneOf: [
            {
              $ref: "#/components/schemas/ObjectUnionDouble.IA",
            },
            {
              $ref: "#/components/schemas/ObjectUnionDouble.IB",
            },
          ],
        },
        "ObjectUnionDouble.IA": {
          type: "object",
          properties: {
            value: {
              type: "object",
              properties: {
                x: {
                  "x-typia-required": true,
                  "x-typia-optional": false,
                  type: "number",
                },
              },
              nullable: false,
              required: ["x"],
              "x-typia-jsDocTags": [],
            },
            child: {
              oneOf: [
                {
                  $ref: "#/components/schemas/ObjectUnionDouble.IAB",
                },
                {
                  $ref: "#/components/schemas/ObjectUnionDouble.IAA",
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          nullable: false,
          required: ["value", "child"],
          "x-typia-jsDocTags": [],
        },
        "ObjectUnionDouble.IAB": {
          type: "object",
          properties: {
            value: {
              type: "object",
              properties: {
                y: {
                  "x-typia-required": true,
                  "x-typia-optional": false,
                  type: "number",
                },
              },
              nullable: false,
              required: ["y"],
              "x-typia-jsDocTags": [],
            },
          },
          nullable: false,
          required: ["value"],
          "x-typia-jsDocTags": [],
        },
        "ObjectUnionDouble.IAA": {
          type: "object",
          properties: {
            value: {
              type: "object",
              properties: {
                y: {
                  "x-typia-required": true,
                  "x-typia-optional": false,
                  type: "boolean",
                },
              },
              nullable: false,
              required: ["y"],
              "x-typia-jsDocTags": [],
            },
          },
          nullable: false,
          required: ["value"],
          "x-typia-jsDocTags": [],
        },
        "ObjectUnionDouble.IB": {
          type: "object",
          properties: {
            value: {
              type: "object",
              properties: {
                x: {
                  "x-typia-required": true,
                  "x-typia-optional": false,
                  type: "string",
                },
              },
              nullable: false,
              required: ["x"],
              "x-typia-jsDocTags": [],
            },
            child: {
              oneOf: [
                {
                  $ref: "#/components/schemas/ObjectUnionDouble.IBB",
                },
                {
                  $ref: "#/components/schemas/ObjectUnionDouble.IBA",
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          nullable: false,
          required: ["value", "child"],
          "x-typia-jsDocTags": [],
        },
        "ObjectUnionDouble.IBB": {
          type: "object",
          properties: {
            value: {
              type: "object",
              properties: {
                y: {
                  "x-typia-required": true,
                  "x-typia-optional": false,
                  type: "array",
                  items: {
                    "x-typia-required": true,
                    "x-typia-optional": false,
                    type: "number",
                  },
                },
              },
              nullable: false,
              required: ["y"],
              "x-typia-jsDocTags": [],
            },
          },
          nullable: false,
          required: ["value"],
          "x-typia-jsDocTags": [],
        },
        "ObjectUnionDouble.IBA": {
          type: "object",
          properties: {
            value: {
              type: "object",
              properties: {
                y: {
                  "x-typia-required": true,
                  "x-typia-optional": false,
                  type: "string",
                },
              },
              nullable: false,
              required: ["y"],
              "x-typia-jsDocTags": [],
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