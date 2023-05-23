// import logo from './logo.svg';
// import './App.css';
// import First from './First';
// import Second from './Second';
// import Form from './Form';
// import { Fourth, Third } from './Third';

import React from 'react'
import MyRoute from './MyRoute';
import { themes,ThemeContext } from './themes/ThemeContext';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import cartReducer from './redux/reducer/cartReducer';

const App=() =>{
  const store=createStore(cartReducer)
  return (
    <Provider store={store}>
    <ThemeContext.Provider value={themes.dark}>
    <MyRoute/>

    </ThemeContext.Provider>
    </Provider>
  );
}

export default App;
