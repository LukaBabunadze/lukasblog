const initialState = {
    id: null,
    product: [],
}

const ModalReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ID_RECIEVED":
            return {
                ...state,
                id: action.payload
            }
        case "MODAL_CLOSED":
            return {
                ...state,
                id: action.payload
            }
        case "PRODUCT_FETCHED":
            return {
                ...state,
                product: action.payload
            }
        default:
            return state;
    }
};

export default ModalReducer;
