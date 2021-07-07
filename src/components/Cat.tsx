import React from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/hook'
import { fetchCat } from '../reducers/catReducer'

const Cat = () => {
    const cat = useAppSelector(state => state.cat)
    const dispatch = useAppDispatch()
    console.log(cat)
    return (
        <div>
            <h1>Cat</h1>
            <button onClick={() => dispatch(fetchCat())}>Show Cat</button>
            {
                cat.loading ?
                    <p>{cat.loading}</p>
                    :
                    cat.cat.map(elem => {
                        return (
                            <div>
                                <img src={elem} width="200px" height="200px" />
                            </div>
                        )
                    })
            }
        </div>
    )
}

export default Cat;