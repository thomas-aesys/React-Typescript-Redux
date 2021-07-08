import React from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/hook'
import { decrement, increment } from '../reducers/counterReducer'
import Button from './Button'
import './counter.css'

const Counter = () => {
    const count = useAppSelector(state => state.counter)
    const dispatch = useAppDispatch()
    return (
        <div className="container_counter">
            <h1>Count: {count}</h1>
            <Button onClick={()=> dispatch(increment())}>+</Button>
            <Button onClick={()=> dispatch(decrement())}>+</Button>
        </div>
    )
}

export default Counter;