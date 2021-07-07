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
    // cat: Array<{url:string}> NO
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
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCat.fulfilled, (state, action) => {
            state.loading = ''
            state.cat.push(action.payload[0].url)
        })
        builder.addCase(fetchCat.pending, (state) => {
            state.loading = 'loading...'
        })
    }
})

export default catReducer.reducer