import { createSlice, current } from '@reduxjs/toolkit'

const initialState = [];
let lastId = -1; // Helps increment new tasks with id

// Reducer Slice
export const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        add: (state, action) => {
            state.push(
                {
                    id: ++lastId,
                    description: action.payload.description,
                    status: action.payload.status,
                    isEditing: false
                }
            )
        },
        del: (state, action) => {
            // Splices the array of object tasks
            state.splice(state.findIndex(task => task.id === action.payload.id), 1);
        },
        edit: (state, action) => {
            const task = state.find(task => task.id === action.payload.id)
            console.log(current(task))

            if (task.isEditing) {
                task.isEditing = false
                task.description = action.payload.description
            } else {
                task.isEditing = true
            }
        },
        status: (state, action) => {
            // Finds index and updates the status
            const index = state.findIndex(task => task.id === action.payload.id)
            state[index].status = !state[index].status
        },
    },
})

// Export Reducer Slice
export const { add, del, edit, status } = tasksSlice.actions
export default tasksSlice.reducer
