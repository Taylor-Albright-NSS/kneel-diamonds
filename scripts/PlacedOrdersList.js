export const PlacedOrders = async () => {
    const fetchResponse = await fetch("http://localhost:8088/orders?_expand=metal&_expand=style&_expand=size")
    const orders = await fetchResponse.json()
    console.log(orders)

    let ordersMap = orders.map(order => {
        let cost = (order.metal.price + order.size.price + order.style.price).toFixed(2)
                return `<section class='placedOrders' name='placedOrder' value='${order.id}'
                >Order #${order.id} costs $${cost}
                </section>
                `
            }).join('')

    return ordersMap
}