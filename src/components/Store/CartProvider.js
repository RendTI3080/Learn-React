import { useReducer } from "react";
import CartContext from "./cart-context";

// HOW TO USE PROVIDER
// first, You need context for wrap component and this provider
// second, Add default value and main logic
// third, Add useReducer to managed main logic and default value
// Fourt, Add function to use logic
// Last, Return context wrapping this provider


// Default value for this provider
const defaultCartState = {
    items: [],
    totalAmount: 0
}

// Reducer == Main logic this provider
const cartReducer = (state, action) => {

    // Logic Add
    if(action.type === 'ADD'){

        // Update total Amount
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

        // Search Card Index. To find is item already in cart or not
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.item.id
        );

        // Check item in cart
        const existingCartItem = state.items[existingCartItemIndex];
        let updatedItems;

        // If item is already in cart. Create new objek item and update amount field
        if(existingCartItem){
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount,
            }

            // updateItems array save all items from previous item state.
            updatedItems = [...state.items];
            // update item from items state with new item.
            updatedItems[existingCartItemIndex] = updatedItem;
        }else{

            // If item is not exist in array. Add to items state array
            updatedItems = state.items.concat(action.item)
        }

        console.log(updatedItems);

        // Last return items state and totalAmount state
        // And component can use new cart State
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }

    }else if(action.type === 'REMOVE'){
        // Search Card Index. To find is item already in cart or not
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.id
        );

        const existingItem = state.items[existingCartItemIndex];
        const updatedTotalAmount = state.totalAmount - existingItem.price;

        let updatedItems;
        if(existingItem.amount === 1){
            updatedItems = state.items.filter(item => item.id !== action.id);
        }else{
            const updatedItem = {...existingItem, amount: existingItem.amount - 1};
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }

        console.log(updatedItems);

        // Last return items state and totalAmount state
        // And component can use new cart State
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }

    return defaultCartState;


}

function CartProvider(props){

    // Hook for logic api context. Used useReducer. Need Main logic and default value
    const [cartState, dispatchCartAction] = useReducer(
        cartReducer,
        defaultCartState
    )

    // Logic for add item
    const addItemToCartHandler = (item) => {
        dispatchCartAction({type: "ADD", item: item})
    }

    // logic for remove item
    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({type: "REMOVE", id: id})
    }

    // Function and Field that provide by provider
    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }

    // To provide component. Component that used this Provider can use cartContext API
    return(
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;