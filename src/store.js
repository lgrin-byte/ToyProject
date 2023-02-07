import { configureStore } from '@reduxjs/toolkit'
import userReducer from './pages/count/counterSlice'

export default configureStore({
    reducer:{
        user: userReducer
    }
})