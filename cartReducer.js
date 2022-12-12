import { CART_ADD_ITEM, CART_REMOVE_ITEM,
	CART_SAVE_PAYMENT_METHOD,
	CART_SAVE_SHIPPING_ADDRESS,
} from '../constants/cartConstants';
export const cartReducer = (state = { cartItems: [] }, action) => {
switch (action.type) {
case CART_ADD_ITEM:
	const item = action.payload;
		const existsItem = state.cartItems.find(
(i) => i.product === item.product
	);
	if (existsItem) {
			return {
            ...state,
				cartItems: state.cartItems.map((i) =>
            i.product === existsItem.product ? item : i
			),
			};
	} else {
			return { ...state, cartItems: [...state.cartItems, item] };	
        		}                
                case CART_REMOVE_ITEM:
                    return{
                        ...state,
                        cartItems:state.cartItems.filter((i) => i.product !== action.payload),
                    };
case CART_SAVE_SHIPPING_ADDRESS:
	return {...state,shippingAddress:action.payload};
case CART_SAVE_PAYMENT_METHOD :
	return {...state, PaymentMethod: action.payload};
	default:
	return state;
	}
};
