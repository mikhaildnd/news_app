import type { PluginObj, PluginPass } from '@babel/core';

interface RemoveJSXPropsPluginOptions {
    props?: string[];
}

export default function removeJSXPropsPlugin(): PluginObj<
    PluginPass & { opts: RemoveJSXPropsPluginOptions }
> {
    return {
        visitor: {
            Program(path, state) {
                const forbidden = state.opts.props || [];

                path.traverse({
                    JSXIdentifier(currentPath) {
                        const nodeName = currentPath.node.name;

                        if (forbidden.includes(nodeName)) {
                            currentPath.parentPath.remove();
                        }
                    },
                });
            },
        },
    };
}
