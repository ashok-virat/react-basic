import { useState, useEffect, useMemo, memo } from 'react';

const Test3 = (props) => {
    const [state, setState] = useState({
        count: 0
    })
    const count = useMemo(() => {
        console.log('childe rendered')
        return state.count
    }, [state.count])

    useEffect(() => { console.log('re render child') })


    const increment = () => {
        if (state.count !== 5) {
            setState({ count: state.count + 1 })
        }
        else {
            setState({ count: 5 })
        }
    }
    return (<div>{count} <button onClick={increment}>change Value</button></div>)
}

export default memo(Test3)