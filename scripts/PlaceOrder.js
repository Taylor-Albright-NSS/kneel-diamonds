import { saveOrderSubmission } from "./TransientState.js"

const handlePlaceOrderClick = (clickEvent) => {
    if (clickEvent.target.id === 'saveOrder') {
        saveOrderSubmission()
    }
}

export const placeOrder = () => {
    document.addEventListener("click", handlePlaceOrderClick)
    return `<button id='saveOrder'>Save Order</button>`
}