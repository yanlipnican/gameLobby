import { v4 } from 'uuid';

export namespace Path {
    /**
     * Joins path fragments (handles slashes)
     */
    export function join(parts: string[]): string {
        return parts.map(function (i) {
            return i.replace(/(^\/|\/$)/, '');
        }).join('/');
    }
}

export namespace UUID {
    /**
     * Generates uuid v4
     */
    export function generate(): string{
        return v4();
    }
}