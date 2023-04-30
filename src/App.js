import { Component } from "react";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    console.log("Constructor");
    super();

    this.state = {
      monsters: [],
    };
  }

  // Lifecycle method
  componentDidMount() {
    console.log("Component Mount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  render() {
    console.log("Render");
    return (
      <div className="App">
        <input
          className="search-box"
          type="text"
          placeholder="search monsters"
          onChange={(event) => {
            const filteredMonsters = this.state.monsters.filter((monster) => {
              return monster.name
                .toLowerCase()
                .includes(event.target.value.toLocaleLowerCase());
            });

            this.setState(() => {
              return { monsters: filteredMonsters };
            });
          }}
        />
        {this.state.monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>;
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
