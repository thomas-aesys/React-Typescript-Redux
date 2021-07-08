import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { catReducer } from './reducers/catReducer'
import { counterReducer } from './reducers/counterReducer'
import { Provider } from 'react-redux'
import { mySaga } from './saga/saga';
import createSagaMiddleware from '@redux-saga/core';

const sagaMiddleware= createSagaMiddleware()

const store = configureStore({
  reducer: {
    counter: counterReducer.reducer,
    cat: catReducer.reducer
  },
  middleware: [...getDefaultMiddleware({thunk:false}),sagaMiddleware]
})

sagaMiddleware.run(mySaga)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
