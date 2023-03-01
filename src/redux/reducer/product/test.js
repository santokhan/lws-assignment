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



let obj = {}

// state.forEach((e, i) => {
//     let prev = obj[e.id] || 0;
//     obj[e.id] = e.quantity + prev;
// })

let arr = state.filter((e) => {
    let status = false;
    state.forEach(in_a => {
        if (e.id !== in_a.id) {
            status = true;
        } else {
            status = false
        }
    });
    return status;
})

arrayOfElements.map((element) => {
    return { ...element, subElements: element.subElements.filter((subElement) => subElement.surname === 1) }
})

console.log(arr);
