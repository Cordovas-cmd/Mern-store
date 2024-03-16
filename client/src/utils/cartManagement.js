import { CartItem } from "../components/CartItem";


// const cart = [
//     {
//         id: "1",
//         title: "Credit",
//         alt: "Credit",
//         imageSource: Credit,
//         price: 80,
//         availability: true,
//         count: 3,
//       },
//       {
//         id: "3",
//         title: "Gameroom",
//         alt: "Gameroom",
//         imageSource: GameRoom,
//         price: 10,
//         availability: false,
//         count: 4,
//       },
// ];

// use reduce array method transfers an array into a diff data type. ( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

// go through array, look at first entry start at 0. Add accumulator to each items "count".
export const getNumberOfItemsInCart =(cartItems) => cartItems.reduce((acc, item)=> acc+ item.count , 0);

// get each items price. add acc + each items price * item count. (ex: 0 + 80 * 3)
export const getCartTotal = (cartItems) => cartItems.reduce((acc, item)=> acc+ item.price * item.count, 0)

export const deleteItemFromCart = (product, cartItems) =>
  cartItems.filter((item) => item.id !== product.id);

export const addItemToCart = (product, cartItems) => {
    // get cart items find one where item id is equal to product id.
    const isInCart= cartItems.find(i => i.id === product.id)

    // if item is in cart reduce array, if item id === product id return the item itself and count.(add on to cart) otherwise return acc and array without change. 
   return isInCart
    ? cartItems.reduce(
        (acc, item)=> 
        item.id === product.id 
    ? [...acc, { ...item, count: item.count +1}] 
    : [...acc,item],
    []
    )
    : [...cartItems, {...product, count: 1 }]
};

export const removeItemFromCart = (product,  cartItems) => {
    // check if its in cart
    const isInCart = cartItems.find((i) => i.id === product.id);
    // if not in cart return nothing
    if(!isInCart) return null;
    // if it is in cart
    const { count }= isInCart;
    // if count is greater than on remove 1 if it's = to one remove one
    return count > 1 ? cartItems.reduce((acc, item)=> item.id === product.id ? [ ...acc, 
        {...item, count:item.count -1}]: [...acc, item],
         []
         ) 
         : deleteItemFromCart(product, cartItems);
};


export const updateItemInCart = (operation, product, cartItems) => {
    if (operation === "add") return addItemToCart(product, cartItems);
    if (operation === "remove") return removeItemFromCart(product, cartItems);
    if (operation === "delete") return deleteItemFromCart(product, cartItems);
    return cartItems;
  };
  

// return only the items where the item id and product id don't match.
// export const deleteItemFromCart = (product, cartItems) => cartItems.filter(item => item.id !== product.id)