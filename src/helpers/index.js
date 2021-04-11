export const htmlFromString = (desc) => {
    var elm = document.createElement('div')
    elm.innerHTML = desc
    return elm.textContent
}  
export const formatDescription = (string, length, parse = false) => {
    const parseDescription =  parse ? htmlFromString(string) : string
    return parseDescription.length < length ? parseDescription : `${parseDescription.slice(0, length - 3)}...`
}

export const trimDescription = (description, longDesc = false) => {
    if (!description.length) return description
    const splitText = description.split(/\./m)
    const [short, ...rest] = splitText
    return !longDesc ? `${htmlFromString(short)}.` : `${htmlFromString(rest.join('.'))}`
}

export const navigateTo = (history, url) => {
    history.push(url)
}