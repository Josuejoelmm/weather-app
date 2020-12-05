const ACTIONS = {
    SET_LOADING: 'SET_LOADING'
};

const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.SET_LOADING:
            return {
                ...state,
                isLoading: true
            }
        default:
            return state;
    }
}

export default reducer;