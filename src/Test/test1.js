import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Test3 from "./test3"


function Test1() {
    const [state, setState] = useState({
        name: 'ashok',
        count: 0
    })


    const changeTheName = () => {
        //it will shallow clone the object
        setState({ ...state, count: state.count + 1 })
    }

    // Similar to componentDidMount and componentDidUpdate: (we can use multiple use effect inside the component) 
    useEffect(() => {
        // console.log('use effect')
        // setTimeout(() => {
        //     setState(state => ({ ...state, name: 'arun' }))
        // }, 2000);
    }, [state.village])

    useEffect(() => {
        console.log('use effect 1')
        // setTimeout(() => {
        //     setState(state => ({ ...state, name: 'arun changed' }))
        // }, 4000);
    }, [state.village])

    const createUser = (e) => {

    }
    return (<div><p>{state.name}</p>
        <div><input onChange={createUser}></input>{state.count}<button onClick={changeTheName}>change value</button><Test3 count={state.count}></Test3></div>
        <Link to="/test3"><button>test3</button></Link>
    </div >)
}

export default Test1;