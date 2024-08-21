import { setMetal } from "./TransientState.js"

const metalsEventHandler = async (changeEvent) => {
    let target = changeEvent.target
    if (target.name === 'metal') {
        let convertedValue = parseInt(target.value)
        setMetal(convertedValue)
    }
}

export const MetalOptions = async () => {
    const response = await fetch("http://localhost:8088/metals")
    const metals = await response.json()
    document.addEventListener("change", metalsEventHandler)
    let metalsMap = metals.map((metal) => {
        return `<section class='metals'>
        <input type='radio' name='metal' value='${metal.id}' /> ${metal.metal}
        </section>
        `
    }).join('')
    return metalsMap
}

