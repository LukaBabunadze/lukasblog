const initialState = {
    clickCount: false
}

const CounterReducer = (state = initialState, action) => {
    switch (action.type) {
        case "COUNTER_INCREASED":
            return {
                ...state,
                clickCount: action.payload
            };
        case "COUNTER_DECREASED":
            return {
                ...state,
                clickCount: action.payload
            };
        default:
            return state;
    }
};

export default CounterReducer;