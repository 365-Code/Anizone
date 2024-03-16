import { IAnimeInfo } from "@consumet/extensions"
import { PayloadAction, createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: {}
}

const currentAnimeSlice = createSlice({
    name: 'currentAnime',
    initialState,
    reducers: {
        setCurrentAnime: (state, action : PayloadAction<IAnimeInfo>) => {
            console.log(action.payload);
            state.value = action.payload
        }
    }
})

const currentAnimeReducer = currentAnimeSlice.reducer
export default currentAnimeReducer
export const {setCurrentAnime} = currentAnimeSlice.actions;