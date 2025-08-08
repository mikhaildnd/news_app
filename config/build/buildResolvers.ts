import {ResolveOptions} from 'webpack';

export function buildResolvers(): ResolveOptions {
    return {
        //для того, чтобы не указывать расширения файла при импорте
        //Например, import Component from './Component';
        extensions: ['.tsx', '.ts', '.js'],
    };
}
