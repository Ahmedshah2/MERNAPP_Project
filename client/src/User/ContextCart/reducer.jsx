export const reducer = (state, action) => {
    switch (action.type) {

        case "ADD_TO_CART": {
            return { ...state, cart: [...state.cart, action.payload] }
        }
        case "CLEAR_CART":
            return {
                cart: []
            };


        default: {
            return state;
        }
    }
}