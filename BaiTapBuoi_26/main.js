const products = [
    { id: 1, name: "Gạo ST25 (5kg)", price: 180000, remaining: 20 },
    { id: 2, name: "Dầu ăn Simply (1L)", price: 65000, remaining: 15 },
    { id: 3, name: "Nước mắm Nam Ngư (750ml)", price: 45000, remaining: 30 },
    { id: 4, name: "Sữa tươi Vinamilk (1L)", price: 38000, remaining: 25 },
    { id: 5, name: "Trứng gà (10 quả)", price: 42000, remaining: 18 }
];

const orders = [];
let orderAutoId = 1;

function createOrder(productId, orderQuantity) {
    if (productId == null || orderQuantity == null) {
        console.log("productId and orderQuantity are required");
        return;

    }

    const product = products.find(p => p.id === productId);
    if (!product) {
        console.log("Product not found");
        return;
    }

    if (product.remaining < orderQuantity) {
        console.log("out of stock");
        return;
    }

    const order = {
        id: orderAutoId++,
        productId,
        quantity: orderQuantity
    };

    orders.push(order);
    product.remaining -= orderQuantity;

    return order;
}

function updateOrder(orderId, quantity) {
    const order = orders.find(o => o.id === orderId);
    if (!order) {
        console.log("not found");
        return;
    }

    const product = products.find(p => p.id === order.productId);

    const diff = quantity - order.quantity;
    // diff > 0 → increase quantity
    // diff < 0 → reduce quantity

    if (diff > 0 && product.remaining < diff) {
        console.log("out of stock");
        return;
    }

    product.remaining -= diff;
    order.quantity = quantity;
}

function deleteOrder(orderId) {
    const orderIndex = orders.findIndex(o => o.id === orderId);
    if (orderIndex === -1) {
        console.log("not found");
        return;
    }

    const order = orders[orderIndex];
    const product = products.find(p => p.id === order.productId);

    product.remaining += order.quantity;
    orders.splice(orderIndex, 1);
}

createOrder(1, 5);   // remaining gạo: 15
createOrder(1, 3);   // remaining gạo: 12

updateOrder(1, 10);  //  increase 5 → remaining: 7
updateOrder(1, 20);  // out of stock

deleteOrder(1);      // return 10 → remaining: 17
