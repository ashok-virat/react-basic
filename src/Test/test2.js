import React from "react";
import { Link } from "react-router-dom";

const Test2 = (props) => {
    console.log('called')
    return (<div>test2
        <Link to="/"><button>test1</button></Link>
    </div>)
}

export default Test2;