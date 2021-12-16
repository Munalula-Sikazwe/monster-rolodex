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


    render = () => (
        <div className="App">
            <input type={'search'} placeholder={'Search Monsters'}/>
            <CardListComponent monsters={this.state.monsters}/>
        </div>);
}

export default App;
