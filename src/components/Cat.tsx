import React from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/hook'
import { GET_CAT } from '../reducers/catReducer'
import './cat.css'

const Cat = () => {
    const cat = useAppSelector(state => state.cat)
    const dispatch = useAppDispatch()
    console.log(cat)
    return (
        <div className="container_cat">
            <h1>Cat</h1>
            <button className="button_cat" onClick={() => dispatch(GET_CAT())}>Show Cat</button>
            <div className="show">
                {
                    cat.loading ?
                        <p>{cat.loading}</p>
                        :
                        cat.cat.map(elem => {
                            return (
                                <div className="img">
                                    <img src={elem} width="200px" height="200px" />
                                </div>
                            )
                        })
                }
            </div>
        </div>
    )
}

export default Cat;