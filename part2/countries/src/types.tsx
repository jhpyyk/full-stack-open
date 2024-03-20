export type RawCountryData = {
    name: {
        common: string
    },
    capital: string,
    area: number,
    languages: {
        [key: string]: string
    }
    flags: {
        png: string,
        svg: string,
        alt: string,
    }
} & {
    [key: string]: unknown;
}

export type Country = {
    name: string
    capital: string,
    area: number,
    languages: string[],
    flag: {
        svg: string,
        alt: string
    }
}