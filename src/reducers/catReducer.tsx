import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
import React from 'react'

export const fetchCat = createAsyncThunk(
    'cat/fetchCat',
    () => {
        return axios.get('https://api.thecatapi.com/v1/images/search')
            .then(res => res.data)
    }
)

// interface CatFromApi {
//     url:string
// }

// interface catInitState {
//     cat: CatFromApi[],
//     loading: string
// }

// const initialState: catInitState = {
//     cat:[],
//     loading:''
// }

interface catIniti {
    // cat: Array<{url:string}> NO perche qui ho un array di oggetti contenti stringhe ma nella chiamata mi prendo un array di stringhe
    cat: string[]
    loading: string
}

const initialState: catIniti = {
    cat: [],
    loading: ''
}

export const catReducer = createSlice({
    name: 'cats',
    initialState,
    reducers: {
        GET_CAT: () => { },
        GET_CAT_IMG: (state, action) => {
            state.loading = ''
            state.cat.push(action.payload)
        },
        CAT_LOADING: (state) => {
            state.loading = 'loading...'
        }
    }
})

export const {GET_CAT, GET_CAT_IMG, CAT_LOADING} = catReducer.actions
export default catReducer.reducer