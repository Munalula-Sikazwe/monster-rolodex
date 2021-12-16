import './App.css';
import {Component} from "react";
import CardListComponent from "./components/card-list/card-list.component";
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
        <CardListComponent>
            {this.state.monsters.map((element) => <h1 key={element.id}> {element.name}</h1>)}
        </CardListComponent>

        </div>);
}

export default App;
