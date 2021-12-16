import logo from './logo.svg';
import './App.css';
import {Component} from "react";

class App extends Component {
    state = [
        {name: 'Frankenstien'},
        {name: 'Dracula'}
        ,{name: 'Zombie'},
    ]
    render = () => (
        <div className="App">
            {
                this.state.map( element => <h1> {element.name}</h1>)
            }
        </div>
    );
}

export default App;
