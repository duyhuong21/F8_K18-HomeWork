const products = [
    { id: 1, name: 'iPhone', price: 2000 },
    { id: 2, name: 'Samsung', price: 1500 },
    { id: 3, name: 'Xiaomi', price: 1000 },
    { id: 4, name: 'Oppo', price: 1200 }
]

const orders = [
    {
        id: 1,
        items: [
            { productId: 1, quantity: 2 },
            { productId: 2, quantity: 1 }
        ]
    },
    {
        id: 2,
        items: [
            { productId: 1, quantity: 1 },
            { productId: 3, quantity: 3 }
        ]
    },
    {
        id: 3,
        items: [
            { productId: 2, quantity: 2 },
            { productId: 4, quantity: 1 }
        ]
    }
]

function getHighestRevenueProduct() {
    const revenueMap = {}


    for (const order of orders) {
        for (const item of order.items) {


            let product = null
            for (const p of products) {
                if (p.id === item.productId) {
                    product = p
                    break
                }
            }


            if (!revenueMap[product.id]) {
                revenueMap[product.id] = 0
            }


            revenueMap[product.id] += product.price * item.quantity
        }
    }


    let highestRevenue = 0
    let productName = ''

    for (const product of products) {
        const revenue = revenueMap[product.id] || 0

        if (revenue > highestRevenue) {
            highestRevenue = revenue
            productName = product.name
        }
    }

    return productName
}

console.log(getHighestRevenueProduct())


