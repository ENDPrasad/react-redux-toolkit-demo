import React from "react";
import { counterActions } from "../store";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";


const incrementBy = 5;
const decrementBy = 10;

const Counter = () => {

    const dispatch = useDispatch()
    const counter = useSelector(state => state.counter)
    const incrementHandler = () => {
        dispatch(counterActions.increment(incrementBy))
    };

    const decrementHandler = () => {
        dispatch(counterActions.decrement(decrementBy))
    };

    return (
        <div>
            <h1>Counter</h1>
            <p>{counter}</p>
            <button onClick={incrementHandler}>Increment by {incrementBy}</button>
            <button onClick={decrementHandler}>Decrement by {decrementBy}</button>
        </div>
    );
}


export default Counter;
