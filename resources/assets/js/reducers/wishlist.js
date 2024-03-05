import {ADD_TO_WISHLIST, EMPTY_WISHLIST, REMOVE_FROM_WISHLIST} from "../api/strings";

const wishlistReducerDefaultState = [];

export default (state = wishlistReducerDefaultState, action) => {
    switch (action.type) {
        case ADD_TO_WISHLIST:
            let idAlreadyExists = state.some(function (el) {
                return el.productID.toString() === action.wishlist.productID.toString();
            });
            if(idAlreadyExists){
                return state;
            }
            else{
                return [
                    ...state,
                    action.wishlist
                ];
            }
        case REMOVE_FROM_WISHLIST:
            return state.filter(({ productID }) => productID.toString() !== action.productID.toString());
        case EMPTY_WISHLIST:
            return (state.length = 0);
        default:
            return state;
    }
};