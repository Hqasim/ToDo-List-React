//Redux - Reducer - Actions

let lastId = 0; // Helps increment new tasks with id
const tasks = (state = [], action) => {
    switch (action.type) {
        case 'ADD':
            return [
                ...state,
                {
                    id: ++lastId,
                    description: action.payload.description,
                    status: action.payload.status
                }
            ];
        case 'DELETE':
            let filteredState = state.filter(task => task.id != action.payload.id)
            return [
                ...filteredState
            ]
        case 'EDIT':
            let editedState = state
            let objIndex = editedState.findIndex(obj => obj.id == action.payload.id);

            editedState[objIndex].description = action.payload.description

            return [...editedState];
        case 'STATUS':
            let editedStateStatus = state
            let objIndexStatus = editedStateStatus.findIndex(obj => obj.id == action.payload.id);

            editedStateStatus[objIndexStatus].status = !editedStateStatus[objIndexStatus].status
            return [...editedStateStatus];
        default:
            return state
    }
}

export default tasks;