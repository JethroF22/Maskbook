export default function Logo() {
    return process.env.NODE_ENV === 'production' ? <MaskbookLogo /> : <MaskbookNightlyLogo />
}

export function MaskbookLogo() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 136 42">
            <path stroke="#fff" strokeWidth="3" d="M39.55 21a18.55 18.55 0 11-37.1 0 18.55 18.55 0 0137.1 0z" />
            <path
                fill="#fff"
                fillRule="evenodd"
                d="M32.45 16.55v6.36H12.54a8.66 8.66 0 0016.21 1.9h3.7v5.35a2.3 2.3 0 01-2.29 2.3H11.84a2.3 2.3 0 01-2.3-2.3V16.55h22.91zm-5.9 8.27a6.74 6.74 0 01-11.14 0h11.15zM16.1 18.07a3.56 3.56 0 00-3.53 3.06h1.96a1.66 1.66 0 013.14 0h1.96a3.56 3.56 0 00-3.53-3.06zm9.8 0a3.56 3.56 0 00-3.53 3.06h1.96a1.66 1.66 0 013.14 0h1.96a3.56 3.56 0 00-3.53-3.06zm4.26-8.52a2.3 2.3 0 012.3 2.29v2.8H9.54v-2.8a2.3 2.3 0 012.29-2.3h18.32z"
                clipRule="evenodd"
            />
            <path
                fill="#fff"
                d="M104.25 15.72c3.47 0 7.41 1.35 7.64 5.67h-4.84c-.1-1.25-1.25-1.83-2.76-1.83-1.42 0-2.05.54-2.05 1.19 0 .54.4 1.04 1.68 1.28l3.06.5c3.06.58 5.08 2.06 5.08 4.96 0 3.78-3.4 5.54-7.64 5.54-4.27 0-7.74-1.8-8.07-6.14l4.84.03c.24 1.42 1.42 2.06 3.13 2.06 1.45 0 2.33-.44 2.33-1.15 0-.54-.51-.98-1.59-1.15l-3.3-.57c-2.82-.47-4.78-2.06-4.78-4.93 0-3.44 2.93-5.46 7.27-5.46zm-20.43.06c1.79 0 3.26.47 4.47 1.25v-.88h5.45V32.5h-5.45v-.91a8.12 8.12 0 01-4.47 1.25c-4.4 0-8.1-3.68-8.1-8.53 0-4.89 3.7-8.53 8.1-8.53zM51.94 9.55L60.1 21.8l8.13-12.26h4.25v22.97h-5.7V21l-5.09 7.87v.03h-3.17v-.03l-5.13-7.94.04 11.59h-5.7V9.55h4.21zm68.58-.96v13.72l5.69-6.14h6.5l-6.2 6.68 6.74 9.67h-6.53l-3.91-5.66-2.3 2.46v3.2h-5.45V8.59h5.45zM84.9 20.23c-2.22 0-3.83 1.82-3.83 4.08s1.61 4.04 3.83 4.04c1.2 0 2.39-.33 3.4-1.51v-5.06a4.21 4.21 0 00-3.4-1.55z"
            />
        </svg>
    )
}

export function MaskbookNightlyLogo() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 136 42">
            <path stroke="#fff" strokeWidth="3" d="M40.5 21a19.5 19.5 0 11-39 0 19.5 19.5 0 0139 0z" />
            <path
                fill="#fff"
                fillRule="evenodd"
                d="M32.45 16.55v6.36H12.54a8.66 8.66 0 0016.21 1.9h3.7v5.35a2.3 2.3 0 01-2.29 2.3H11.84a2.3 2.3 0 01-2.3-2.3V16.55h22.91zm-5.9 8.27a6.74 6.74 0 01-11.14 0h11.15zM16.1 18.07a3.56 3.56 0 00-3.53 3.06h1.96a1.66 1.66 0 013.14 0h1.96a3.56 3.56 0 00-3.53-3.06zm9.8 0a3.56 3.56 0 00-3.53 3.06h1.96a1.66 1.66 0 013.14 0h1.96a3.56 3.56 0 00-3.53-3.06zm4.26-8.52a2.3 2.3 0 012.3 2.29v2.8H9.54v-2.8a2.3 2.3 0 012.29-2.3h18.32z"
                clipRule="evenodd"
            />
            <path
                fill="#fff"
                d="M104.25 9.04c3.47 0 7.41 1.35 7.64 5.66h-4.84c-.1-1.24-1.25-1.82-2.76-1.82-1.42 0-2.05.54-2.05 1.18 0 .54.4 1.05 1.68 1.29l3.06.5c3.06.58 5.08 2.06 5.08 4.96 0 3.78-3.4 5.54-7.64 5.54-4.27 0-7.74-1.8-8.07-6.15l4.84.04c.24 1.42 1.42 2.06 3.13 2.06 1.45 0 2.33-.44 2.33-1.15 0-.54-.51-.98-1.59-1.15l-3.3-.57c-2.82-.47-4.78-2.06-4.78-4.93 0-3.44 2.93-5.46 7.27-5.46zm-20.43.06c1.79 0 3.26.47 4.47 1.25v-.88h5.45v16.35h-5.45v-.91a8.12 8.12 0 01-4.47 1.24c-4.4 0-8.1-3.67-8.1-8.52 0-4.89 3.7-8.53 8.1-8.53zM51.94 2.86l8.16 12.27 8.13-12.27h4.25v22.98h-5.7V14.32l-5.09 7.87v.03h-3.17v-.03l-5.13-7.94.04 11.59h-5.7V2.86h4.21zm68.58-.95v13.72l5.69-6.14h6.5l-6.2 6.67 6.74 9.68h-6.53l-3.91-5.67-2.3 2.46v3.2h-5.45V1.92h5.45zM84.9 13.55c-2.22 0-3.83 1.82-3.83 4.08s1.61 4.04 3.83 4.04c1.2 0 2.39-.34 3.4-1.51V15.1a4.21 4.21 0 00-3.4-1.55zM55.41 30.4v5.36l-5.51-5.35h-2.17v9.5h2.84V34.7l5.48 5.2h2.19v-9.5H55.4zM60.26 30.4v9.5h2.84v-9.5h-2.84zM70.67 34.57v1.86l3.28.03a3.26 3.26 0 01-2.91 1.48c-2.02 0-3.31-1.24-3.31-2.74 0-1.68 1.33-2.84 3.3-2.84 1.02 0 2.16.33 2.65 1.43h3c-.5-2.26-2.92-3.56-5.72-3.56-3.49 0-6.1 2.07-6.1 5.03 0 2.72 2.5 4.83 6.08 4.83 1.6 0 2.79-.5 3.61-1.34l.12 1.16h2.12v-5.34h-6.12zM86.53 30.4v3.82h-4.66v-3.81h-2.84v9.5h2.84v-3.56h4.66v3.56h2.83v-9.5h-2.83zM100.77 30.4H90.64v2.12h3.65v7.39h2.83v-7.4h3.65v-2.1zM104.9 37.8v-7.4h-2.84v9.5h8.49v-2.1h-5.65zM117.38 30.4l-2.8 4.14-2.8-4.13h-3.14l4.52 6.64v2.86h2.86v-2.86l4.5-6.64h-3.14z"
            />
        </svg>
    )
}