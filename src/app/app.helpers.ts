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