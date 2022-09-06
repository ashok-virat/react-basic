import React from "react";
import { Link } from 'react-router-dom'



class TestClass2 extends React.PureComponent {
    constructor(props) {
        super()
        this.state = {
            count: 0
        }
    }
    componentDidUpdate() {
        console.log('updated')
    }
    render() {
        return (<>child component</>)
    }
}


class TestClass1 extends React.Component {
    constructor(props) {
        super()
        this.state = { name: 'virat', village: 'city', count: 0 }
    }

    changeName = () => {
        //it will change the object state particular value
        this.setState({ count: this.state.count + 1 })
        let vm = this;
        if (this.state.count === 5) {
            setTimeout(() => {
                vm.setState({ count: 7 })
            }, 5000);
        }
    }


    //it will trigger during the component mount
    render() {
        return (<><p>{this.state.count}</p><button onClick={this.changeName}>changeName</button><TestClass2 name={this.state.count}></TestClass2></>)
    }

    // it will trigger after component mount
    componentDidMount() {
        this.setState({ village: 'componentDidMount1' })
    }


    //This function is called before rendering a component and tells React whether it should update the component on receiving new props or state. It takes the new Props and new State as the arguments and returns whether or not to re-render the component by returning either True or False
    shouldComponentUpdate(state, props) {
        //we can stop the component re render using this hook
        if (this.state.count === 5) return false
        return true
    }

    //This function is called once after the render() function is executed after the update of State or Props.
    componentDidUpdate() { }

    //it will work like catch block, but component level. catch block only work inside the events but while component re render if any error we can use error boundaries
    componentDidCatch(error, errorInfro) {
        console.log(error)
        console.log(errorInfro)
    }
}

export default TestClass1;