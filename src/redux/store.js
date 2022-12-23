import { configureStore} from "@reduxjs/toolkit";
import postReducer from "./feature/postSlice";
import addReducer from './feature/postSlice'

const store = configureStore({
    reducer:{
        post:postReducer,
        add:addReducer
    }
})

export default store;