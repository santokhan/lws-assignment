const state = [{
    category: "toy",
    id: 1,
    name: "Text",
    price: 520,
    quantity: 5,
    src: "https://i.dummyjson.com/data/products/59/thumbnail.jpg",
}, {
    category: "toy",
    id: 7,
    name: "Text",
    price: 520,
    quantity: 20,
    src: "https://i.dummyjson.com/data/products/59/thumbnail.jpg",
},
{
    category: "toy",
    id: 5,
    name: "Text",
    price: 520,
    quantity: 10,
    src: "https://i.dummyjson.com/data/products/59/thumbnail.jpg",
},
{
    category: "toy",
    id: 5,
    name: "Text",
    price: 520,
    quantity: 30,
    src: "https://i.dummyjson.com/data/products/59/thumbnail.jpg",
},
]

function addQuantity(arr, id) {
    return arr.map(e => {
        if (e.id === id) {
            return { ...e, quantity: e.quantity + 1 }
        } else {
            return e;
        }
    })
}

function compare(arr, id) {
    let status = false
    arr.forEach(e => {
        if (e.id === id) {
            status = true
        } else {
            status = false
        }
    })
    return status;
}



console.log(compare2(state, 5));
