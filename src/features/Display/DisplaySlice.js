import { createSlice } from '@reduxjs/toolkit'


export const displaySlice = createSlice({
    name: 'displaySlice',
    initialState: {
        mode: localStorage.mode ?? 'light',
        expanded: false
    },
    reducers:{
        setMode: (state , action) => {
            let mode = action.payload;
            if ( mode == 'dark'){
                state.mode = 'light';
                localStorage.mode = 'light';
                return;
            }else{
                state.mode = 'dark';
                localStorage.mode = 'dark';
            }
        },
        setExpanded: (state , action) => {
            state.expanded = action.payload;
        }
    }
})




export const { setMode , setExpanded } = displaySlice.actions

export default displaySlice.reducer

