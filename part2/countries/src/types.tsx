export type Country = {
    name: {
        common: string
    }
} & {
    [key: string]: unknown;
}