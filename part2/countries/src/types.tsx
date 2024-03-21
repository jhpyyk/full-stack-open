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
    },
    capitalInfo: {
        latlng: [
            number,
            number
        ]
    },
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
    },
    capitalLocation: capitalLocation | null,
}

export type RawWeatherData = {
    weather: [
        {
            id: number,
            main: string,
            description: string,
            icon: string,
        }
    ],
    main: {
        temp: number,
        [key: string]: unknown,
    },
    wind: {
        speed: number,
        [key: string]: unknown,
    }
} & {
    [key: string]: unknown;
}

export type capitalLocation = {
    lat: number,
    lng: number
}