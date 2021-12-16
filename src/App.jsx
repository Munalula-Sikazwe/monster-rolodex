import './App.css';
import {Component} from "react";
import CardListComponent from "./components/card-list/card-list.component";

class App extends Component {
    state = {
        monsters: [],
        searchField: ""
    }

    changeValue = (event) => {
        this.setState({searchField: event.target.value})
    }

    componentDidMount() {
        const endpoint = 'https://jsonplaceholder.typicode.com/users'
        fetch(endpoint)
            .then(result => result.json())
            .then(result => {
                this.setState({monsters: result})
            })
    }


    render = () => {
        const {monsters, searchField}  = this.state;
        const filteredMonsters = monsters.filter(monster=> monster.name.toLowerCase().includes(searchField));


        return (
            <div className="App">
                <input type={'search'} placeholder={'Search Monsters'} onChange={this.changeValue}/>
                <CardListComponent monsters={filteredMonsters}/>
            </div>);
    }
}
export default App;
