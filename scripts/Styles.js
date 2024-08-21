import { setStyle } from "./TransientState.js"

const styleEventHandler = (changeEvent) => {
    let target = changeEvent.target
    if (target.name === 'style') {
        let convertedValue = parseInt(target.value)
        setStyle(convertedValue)
    }
}

export const Styles = async() => {
    const response = await fetch("http://localhost:8088/styles")
    const styles = await response.json()
    document.addEventListener("change", styleEventHandler)
    let stylesMap = styles.map(style => {
        return `<section class='styles'>
        <input type='radio' name='style' value='${style.id}' /> ${style.style}
        </section>
        `
    }).join('')
    return stylesMap
}