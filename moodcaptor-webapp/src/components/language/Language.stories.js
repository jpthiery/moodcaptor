import React from "react";
import Language from "./Language";
import {languageAvailables} from "../../translations";

const convertToLanguage = item => ({
    language: `${item[0]}`.toUpperCase(),
    flag: item[1]
})
const mappings = {}
Object.entries(languageAvailables).forEach(item => mappings[item[0]] = {
    language: item[0].toUpperCase(),
    flag: item[1]
})

export default {
    title: "Design/Atome/Language",
    component: Language,
    argTypes: {
        displayLabel: {
            control: {
                type: 'boolean'
            }
        }
    }
}


const Template = (args) => <Language {...args}/>

export const ListLanguageFromTranslate = Template.bind({})

let currentSelect = 0
const flip = () => {
    currentSelect++
    const languageIndex = currentSelect % Object.values(languageAvailables).length;
    return convertToLanguage(Object.entries(languageAvailables)[languageIndex])
}

ListLanguageFromTranslate.args = {
    flipLanguage: flip
}
ListLanguageFromTranslate.argTypes = {
    initialLanguage: {
        options: Object.entries(languageAvailables).map(item => convertToLanguage(item).language.toLowerCase()),
        control: {
            type: 'select',
        },
        defaultValue: convertToLanguage(Object.entries(languageAvailables)[0]).language.toLowerCase(),
        mapping: mappings
    }
}
