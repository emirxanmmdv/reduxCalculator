import {configureStore} from "@reduxjs/toolkit"
import counterReducer from "./reducers/calculatorReducer"
import calculatorReducer from "./reducers/calculatorReducer"

export const store = configureStore({
    reducer:{
        counter:counterReducer,
        calculator:calculatorReducer
    }
})
