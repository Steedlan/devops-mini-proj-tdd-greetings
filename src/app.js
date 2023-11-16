const languages = {
    en: {
        isNull: 'my friend.',
        helloLower: 'Hello',
        helloUpper: 'HELLO',
        andLower: 'and',
        andUpper: 'AND',
    },
    nl: {
        isNull: 'mijn vriend.',
        helloLower: 'Hallo',
        helloUpper: 'HALLO',
        andLower: 'en',
        andUpper: 'EN',
    },
    fr: {
        isNull: 'mon ami.',
        helloLower: 'Bonjour',
        helloUpper: 'BONJOUR',
        andLower: 'et',
        andUpper: 'ET',
    },
}

function greet(name) {
    const { language, index } = findLanguage(name)
    if (index !== -1) name.splice(index, 1)

    if (!isUndefinedOrNull(name) && isAnArray(name) && name.length === 1)
        name = name[0]

    if (isUndefinedOrNull(name) || isEmptyString(name))
        return `${language.helloLower}, ${language.isNull}`

    if (isAnArray(name) && name.length > 1) {
        return arrayGreeting(name, language)
    }
    if (isUpperCase(name)) return `${language.helloUpper}, ${name}!`

    return `${language.helloLower}, ${name}.`
}

function isLanguageSupported(language) {
    return languages[language] !== undefined
}

function findLanguage(name) {
    if (isUndefinedOrNull(name)) return { language: languages['en'], index: -1 }

    for (let i = 0; i < name.length; i++) {
        if (isLanguageSupported(name[i])) {
            return { language: languages[name[i]], index: i }
        }
    }
    return { language: languages['en'], index: -1 }
}

function isUndefinedOrNull(name) {
    return name === undefined || name === null
}

function isEmptyString(name) {
    return name === ''
}
function isUpperCase(name) {
    return name === name.toUpperCase()
}

function isAnArray(name) {
    return typeof name !== 'string'
}

function arrayGreeting(name, language) {
    let upperCase
    let message = language.helloLower
    for (i = 0; i < name.length; i += 1) {
        if (isLanguageSupported(name[i])) continue

        if (isUpperCase(name[i])) {
            upperCase = name[i]
            continue
        }
        if (i === name.length - 1)
            message += ` ${language.andLower} ${name[i]}.`
        else message += `, ${name[i]}`
    }
    if (upperCase !== undefined)
        message += ` ${language.andUpper} ${language.helloUpper} ${upperCase}!`
    return message
}

module.exports = greet
