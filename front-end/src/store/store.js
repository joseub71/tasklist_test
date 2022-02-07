import { configureStore } from '@reduxjs/toolkit'
import completeTaskReducer from 'store/completeTaskSlice'

export default configureStore({
  reducer: {
    completeTask: completeTaskReducer
  },
});