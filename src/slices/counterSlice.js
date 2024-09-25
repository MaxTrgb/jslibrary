const initialState = {
    value: 0
}

export const counterSlice = {
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        }
    }
}   

export default counterSlice.reducer
