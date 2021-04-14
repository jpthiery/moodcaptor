import {createTranslations} from "react-ridge-translations";

export const languageAvailables = {
    fr: "🇫🇷",
    en: "🇬🇧"
}
const defaultLanguage = "fr"
const userLanguage = navigator.language

const getDefaultUserLanguage = usrLang => Object.keys(languageAvailables).find(item => usrLang.startsWith(item)) || defaultLanguage

const translate = createTranslations()({
        DateSelector: {
            dateFormat: {
                en: "MM/dd/yyyy",
                fr: "dd/MM/yyyy"
            }
        },
        Groups: {
            group: {
                en: "Group",
                fr: "Groupe"
            }
        },
        GroupStats: {
            statsHeader: (begin, end) => ({
                en: `Mood stats for group ${begin} - ${end}`,
                fr: `Mood du group entre le ${begin} et le ${end}`
            })
        },
        MoodRate: {
            rate: {
                en: "Rate",
                fr: "Taux"
            }
        },
        MoodStats: {
            loading: {
                en: "We are currently fetching yours moods.",
                fr: "Nous actualisons les moods."
            }
        },
        StatsGraph: {
            nbVotes: {
                en: "Nb votes",
                fr: "Nb votes"

            },
            trendMood: {
                en: "Mood trend",
                fr: "Tendance du mood"
            }
        },
        SurveyForm: {
            submitAction: {
                en: "Mood",
                fr: "Mooder"
            },
            submitError: (reason) => ({
                en: `Your mood had not been submitted: ${reason}`,
                fr: `L'enregistrement de votre mood n'a pas pu aboutir: ${reason}`
            })
        },
        TimeRange: {
            start: {
                en: "start",
                fr: "début"
            },
            end: {
                en: "end",
                fr: "fin"
            }
        },
    },
    {
        language: getDefaultUserLanguage(userLanguage),
        fallback: defaultLanguage,
    })

const convertLanguage = lang => {
    const indexLanguage = Object.keys(languageAvailables).findIndex(item => item && item === lang)
    const item = Object.entries(languageAvailables)[indexLanguage]
    return {
        language: item[0],
        flag: item[1]
    }
}

export const useLanguageAvailable = () => {
    const currentLanguage = translate.getOptions().language;
    const flag = languageAvailables[currentLanguage]
    return {
        language: currentLanguage,
        flag: flag
    }
}

export const changeToNextLanguage = () => {
    const currentLanguage = translate.getOptions().language;
    const indexLanguage = Object.keys(languageAvailables).findIndex(item => item && item === currentLanguage)

    const nextLanguageIndex = (indexLanguage + 1) % Object.values(languageAvailables).length;
    const nextLanguage = Object.entries(languageAvailables)[nextLanguageIndex]
    translate.setOptions({
        language: nextLanguage[0],
        fallback: defaultLanguage
    })
    const newLanguage = translate.getOptions().language
    return convertLanguage(newLanguage)
}

export default translate