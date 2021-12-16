import './App.css';
import {Component} from "react";

class App extends Component {
    state = [
        {name: 'Frankenstein'},
        {name: 'Dracula'}
        , {name: 'Zombie'},
    ]
    render = () => (
        <div className="App">
            {
                this.state.map((element, i) => <h1 key={i}> {element.name}</h1>)
            }
        </div>
    );
}

export default App;
