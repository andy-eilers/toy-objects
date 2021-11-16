const toys = [
{
    id: 1,
    name: "Fire Dog",
    manufacturer: "Funko",
    material: "Plastic",
    purpose: "Doll",
    age: "5+",
    price: 13.45
},

{
    id: 2,
    name: "Captain America",
    manufacturer: "Marvel",
    material: "Plastic",
    purpose: "Action Figure",
    age: "8+",
    price: 18.75
},

{
    id: 3,
    name: "Halloween Music Box",
    manufacturer: "ROKR",
    material: "Wood",
    purpose: "Puzzle",
    age: "12+",
    price: 19.99
}
]

const monopoly = {
    id: 4,
    name: "Monopoly",
    manufacturer: "Hasboro",
    material: "Cardboard and Plastic",
    purpose: "Game",
    age: "7+",
    price: 50.75
}

const bear = {
    id: 5,
    name: "Teddy Bear",
    manufacturer: "Build A Bear",
    material: "Plush",
    purpose: "Security",
    age: "3+",
    price: 65.00
}

toys.push(monopoly)
toys.push(bear)

const xbox = {
    name: "Xbox Series X",
    manufacturer: "Microsoft",
    material: "Electronics",
    purpose: "Video Game",
    price: 350.00
}

const addToyToInventory = (toy) => {
    const lastIndex = toys.length - 1
    const currentLastToy = toys[lastIndex]
    const maxId = currentLastToy.id
    const idForNewToy = maxId +1

    toy.id = idForNewToy
    toys.push(toy)
}

addToyToInventory(xbox)

console.log(toys)

/* for (const toy of toys) {
    if (toy.id === toyToFind) {
        toy.price = toy.price * .05 + toy.price
        console.log(`The ${toy.name} costs ${toy.price}`)
    }
}
*/