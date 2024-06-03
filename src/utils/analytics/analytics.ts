import ReactGA from 'react-ga'

export const initGA = (trackingId: string, userId: string | undefined) => {
    ReactGA.initialize(trackingId, {
        gaOptions: {
            siteSpeedSampleRate: 100,
            userId: userId
        }
    })
}

export const logPageView = (path: string) => {
    ReactGA.set({page: path})
    ReactGA.pageview(path)
}

export const logEvent = (category = '', action = '') => {
    if (category && action) {
        ReactGA.event({category, action})
    }
}

export const logModalView = (name: string) => {
    if (name) {
        ReactGA.modalview(name)
    }
}


