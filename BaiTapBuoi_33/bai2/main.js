const products = [
    { productId: 1, name: "iPhone", price: 20000000, stock: 6 },
    { productId: 2, name: "Samsung", price: 15000000, stock: 9 },
    { productId: 3, name: "Xiaomi", price: 8000000, stock: 0 }
];

function getProduct(productId) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            const product = products.find(p => p.productId === productId);

            if (product) {
                resolve(product);
            } else {
                reject("The product does not exist.");
            }

        }, 1000);

    });
}

function processPayment(product) {
    return new Promise((resolve, reject) => {

        console.log("Payment in progress...");

        setTimeout(() => {

            if (product.stock > 0) {
                resolve("Payment successful");
            } else {
                reject("The product does not exist.");
            }

        }, 1500);

    });
}

function createOrder(product) {
    return new Promise((resolve) => {

        console.log("Creating an order...");

        setTimeout(() => {

            resolve({
                orderId: Date.now(),
                productName: product.name,
                status: "SUCCESS"
            });

        }, 1000);

    });
}

function buyProduct(productId) {

    getProduct(productId)
        .then(product => {
            console.log("Valid advertising space");
            return processPayment(product)
                .then(result => {
                    console.log(result);
                    return product;
                });
        })
        .then(product => {
            return createOrder(product);
        })
        .then(order => {
            console.log("Order successful!");
            console.log("Order:", order);
        })
        .catch(err => {
            console.log("Error:", err);
        });

}

buyProduct(1)
buyProduct(2)