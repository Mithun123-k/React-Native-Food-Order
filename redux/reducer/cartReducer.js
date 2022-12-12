let defaultState = {
    selectedItems: { items: [], restaurantName: '' },
};

let cartReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART': 
        {
            let newState = { ...state };

            if (action.payload.checkboxValue) {

                newState.selectedItems = {
                    items: [...newState.selectedItems.items, action.payload],
                    restaurantName: action.payload.restaurantName
                }

                console.log( [...newState.selectedItems.items])
            } else {
                newState.selectedItems = {
                    items: [
                        ...newState.selectedItems.items.filter((item) => item.id !== action.payload.id)
                    ],
                    restaurantName: action.payload.restaurantName,
                }
                console.log( [...newState.selectedItems.items])
            }


            // console.log(newState)

            return newState;

        }


        default:
            return state;
    }
}

export default cartReducer;