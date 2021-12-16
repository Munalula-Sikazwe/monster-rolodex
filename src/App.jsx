import './App.css';
import {Component} from "react";

class App extends Component {
    state = {
        monsters: []
    }


    componentDidMount() {
        const endpoint = 'https://jsonplaceholder.typicode.com/users'
        fetch(endpoint)
            .then(result => result.json())
            .then(result => {
                this.setState({monsters: result})
            })
    }


    render = () => (<div className="App">
            {this.state.monsters.map((element) => <h1 key={element.id}> {element.name}</h1>)}
        </div>);
}

export default App;
