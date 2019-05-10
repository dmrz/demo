import React from 'react';
import { connect } from 'react-redux'

import {
    incrementCounter,
    decrementCounter,
    incrementCounterByReactStarsCount,
    decrementCounterByReactStarsCount,
} from './reducers';


const Counter = ({
        counter,
        counterSquared,
        inputDisabled,
        incrementCounter,
        decrementCounter,
        incrementCounterByReactStarsCount,
        decrementCounterByReactStarsCount
    }) => {
    return (
        <div>
            <h3>CounterRedux: {counter} ({counterSquared} squared)</h3>
            <div>
                <input type="button" value="Increment" onClick={incrementCounter} disabled={inputDisabled} />
                <input type="button" value="Decrement" onClick={decrementCounter} disabled={inputDisabled} />
            </div>
            <div>
                <input type="button" value="Increment by React stars number" onClick={incrementCounterByReactStarsCount} disabled={inputDisabled} />
                <input type="button" value="Decrement by React stars number" onClick={decrementCounterByReactStarsCount} disabled={inputDisabled} />
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    counter: state.counter,
    counterSquared: state.counter * state.counter,
    inputDisabled: state.reactStarsCounter.reactStarsCountLoadInProgress,
})

const mapDispatchToProps = dispatch => ({
    incrementCounter: counter => dispatch(incrementCounter(counter)),
    decrementCounter: counter => dispatch(decrementCounter(counter)),
    incrementCounterByReactStarsCount: counter => dispatch(incrementCounterByReactStarsCount(counter)),
    decrementCounterByReactStarsCount: counter => dispatch(decrementCounterByReactStarsCount(counter)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
