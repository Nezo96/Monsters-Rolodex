import { Component } from "react";
import "./card-list.styles.css";
import Card from "../card/card.component";

class CardList extends Component {
  render() {
    const { monsters } = this.props;

    return (
      <div className="card-list">
        {monsters.map((monster) => {
          const { id, name, email } = monster;
          return (
            <Card
              className={"card-container"}
              id={id}
              name={name}
              email={email}
            />
            // <div className="card-container" key={id}>
            //   <img
            //     src={`https://robohash.org/${id}?set=set2&size=180x180`}
            //     alt={`monster ${name}`}
            //   />
            //   <h2>{name}</h2>
            //   <p>{email}</p>
            // </div>
          );
        })}
      </div>
    );
  }
}

export default CardList;
