declare module '*.scss' {
    const classNames: { [className: string]: string };
    export default classNames;
}

declare module '*.png' {
    const value: string;
    export default value;
}
declare module '*.jpg' {
    const value: string;
    export default value;
}
declare module '*.jpeg' {
    const value: string;
    export default value;
}
declare module '*.svg' {
    import type React from 'react';

    const SVG: React.FC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
}

declare const __IS_DEV__: boolean;
declare const __API__: string;
declare const __PROJECT__: 'storybook' | 'frontend' | 'jest' | 'cypress';

type DeepPartial<T> = T extends object
    ? {
          [P in keyof T]?: DeepPartial<T[P]>;
      }
    : T;

type RootStateDeepPartial = {
    [K in keyof RootState]?: RootState[K] extends object
        ? RootStateDeepPartial<RootState[K]>
        : RootState[K];
};

type OptionalRecord<K extends string, T> = {
    [P in K]?: T;
};
