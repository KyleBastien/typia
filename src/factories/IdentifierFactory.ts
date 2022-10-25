import ts from "typescript";

import { Escaper } from "../utils/Escaper";

export namespace IdentifierFactory {
    export function generate(name: string) {
        return Escaper.variable(name)
            ? ts.factory.createIdentifier(name)
            : ts.factory.createStringLiteral(name);
    }

    export function join(prefix: ts.Expression, name: string) {
        const postfix = generate(name);
        return ts.isStringLiteral(postfix)
            ? ts.factory.createElementAccessExpression(prefix, postfix)
            : ts.factory.createPropertyAccessExpression(prefix, postfix);
    }

    export function postfix(str: string): string {
        return Escaper.variable(str)
            ? `".${str}"`
            : `"[${JSON.stringify(str).split('"').join('\\"')}]"`;
    }

    export function parameter(
        name: string | ts.BindingName,
        init?: ts.Expression,
    ) {
        if (ts.version >= "4.8")
            return ts.factory.createParameterDeclaration(
                undefined,
                undefined,
                name,
                undefined,
                undefined,
                init,
            );
        // eslint-disable-next-line
        return ts.factory.createParameterDeclaration(
            undefined,
            undefined,
            undefined,
            name,
            undefined,
            undefined,
            init,
        );
    }
}
