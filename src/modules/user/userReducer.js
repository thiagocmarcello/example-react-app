const ADD_USER = 'ADD_USER';

const initialState = {
    users: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            return { ...state, users: [...state.users, action.payload] };
        default:
            return state;
    }
};

export const addUser = user => ({ type: ADD_USER, payload: user });
