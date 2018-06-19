import employees from './List'
import React, {Component} from 'react';
import Filtered from './Filtered';

class Employee extends Component {
    constructor(props) {
        super(props);
        this.state = {result: null}
        this.search=this.search.bind(this)
    }

    render() {
        return (
            <section id="userInput">
                <input className="nameSearch" id="nameSearch"/>
                <button id="Search" onClick={this.search}> Search</button>
                {this.state.result}
            </section>

        )
    }

    search() {

        const data = document.getElementById("nameSearch");
        this.setState({
           result:<Filtered employees={employees} data={data.value}/>
        });
    }

}

export default Employee;
