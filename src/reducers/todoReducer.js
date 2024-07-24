export const actionTypes={
    ADD_TASK: 'ADD_TASK',
    DELETE_TASK: 'DELETE_TASK',
    TOGGLE_COMPLETE: 'TOGGLE_COMPLETE',
    UPDATE_TASK: 'UPDATE_TASK',
    SET_TASKS: 'SET_TASKS'
}


const todoReducer = (state, action) => {
    switch (action.type) {
        case actionTypes.ADD_TASK:
            return [
                ...state,
                {
                    id: state.length + 1,
                    title: action.payload.title,
                    completed: false
                }
            ];
        case actionTypes.DELETE_TASK:
            return state.filter(task => task.id !== action.payload.id);
        case actionTypes.TOGGLE_COMPLETE:
            return state.map(task => 
                task.id === action.payload.id ? { ...task, completed: !task.completed } : task
            );
        case actionTypes.UPDATE_TASK:
            return state.map(task => 
                task.id === action.payload.id ? { ...task, title: action.payload.newTitle } : task
            );
        case actionTypes.SET_TASKS:
            return action.payload;
        default:
            return state;
    }
};

export default todoReducer;