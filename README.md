# React and Redux
This is a simple example of a React Aapplication using Redux.
It's a very simple version, feel free to send corrections and improvements.

### Installation
```sh
$ git clone git@github.com:thiagocmarcello/simple-react-app.git
$ cd simple-react-app/
$ npm install
$ npm start
```

### Reducer File userReducer.js
```jsx
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
```
