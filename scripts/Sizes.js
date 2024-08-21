import { setSize } from "./TransientState.js"

const sizesEventHandler = (changeEvent) => {
    let target = changeEvent.target
    if (target.name === 'size') {
        let convertedValue = parseInt(target.value)
        setSize(convertedValue)
    }
}

export const Sizes = async() => {
    const response = await fetch("http://localhost:8088/sizes")
    const sizes = await response.json()
    document.addEventListener("change", sizesEventHandler)
    let sizesMap = sizes.map(size => {
        return `<section class='sizes'>
        <input type='radio' name='size' value='${size.id}' /> ${size.carets}
        </section>
        `
    }).join('')
    return sizesMap
}