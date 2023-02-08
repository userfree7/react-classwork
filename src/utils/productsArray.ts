type Product = {
    id: number
    title: string
    description: string
    type: string
    capacity: string
    price: number
}

const productsArray: Product[] =[
    {id: 1,
        title:'iPhone 14 Pro',
    description: 'This is iPhone 14 Pro',
    type: 'iPhone',
    capacity: '256',
    price:2000,
},
{id: 2,
    title:'iPhone 13 Pro',
    description: 'This is iPhone 1 Pro',
    type: 'iPhone',
    capacity: '256',
    price:1000,
},
{id: 3,
    title:'iPhone 12 Pro',
    description: 'This is iPhone 12 Pro',
    type: 'iPhone',
    capacity: '512',
    price:1000,
},


{id: 4,
    title:'iPhone 11 Pro',
    description: 'This is iPhone 11 Pro',
    type: 'iPhone',
    capacity: '128',
    price:500,
},
{id: 5,
    title:'iPhone 8 Plus',
description: 'This is iPhone 8 Plus',
type: 'iPhone',
capacity: '256',
price:500,
},
{
    id: 6,
    title:'iPhone X',
    description: 'This is iPhone X',
    type: 'iPhone',
    capacity: '64',
    price:500,
},

]
export default productsArray