import { MetalOptions } from "./Metals.js";
import { Sizes } from "./Sizes.js";
import { Styles } from "./Styles.js";
import { placeOrder } from "./PlaceOrder.js";
import { PlacedOrders } from "./PlacedOrdersList.js";

const container = document.getElementById('container')

const render = async () => {
    const metalOptionsHTML = await MetalOptions()
    const sizesHTML = await Sizes()
    const stylesHTML = await Styles()
    const placeOrderButton = await placeOrder()
    const placedOrders = await PlacedOrders()
    const composedHTML = `
        <h1>Kneel Diamonds</h1>

        <article class="choices">
            <section class="choices__metals options">
                <h2>Metals</h2>
                ${metalOptionsHTML}
            </section>

            <section class="choices__sizes options">
                <h2>Sizes</h2>
                ${sizesHTML}
            </section>

            <section class="choices__styles options">
                <h2>Styles</h2>
                ${stylesHTML}
            </section>
        </article>

        <article class="order">
            ${placeOrderButton}
        </article>

        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>
            ${placedOrders}
        </article>
    `
    container.innerHTML = composedHTML
}
render()

document.addEventListener("newOrderPlaced", event => {
    console.log("State of data has changed. Regenerating HTML...")
    render()
})

