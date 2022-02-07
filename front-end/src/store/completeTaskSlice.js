import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  modal: false,
  task: null
}

export const completeTaskSlice = createSlice({
  name: 'completeTask',
  initialState,
  reducers: {
    handlerModal: (state, action) => {
      state.modal = action.payload
    },
    handlerTask: (state, action) => {
      state.task = action.payload
    }
  },
})

export const { handlerModal, handlerTask } = completeTaskSlice.actions

export const modalValue = state => state?.completeTask?.modal;
export const taskValue = state => state?.completeTask?.task;

export default completeTaskSlice.reducer
