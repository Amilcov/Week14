import Card from "../Card";
import { useAppContext } from "../../context/AppContext";
import { useEffect } from "react";

const Store = () => {
  const { cards, applicationState, buyCard } = useAppContext();
  const { inventory } = applicationState;  

  console.log('Store - applicationState.inventory', applicationState.inventory);

  return (
    <div>
      <h2 className="title is-2">Store Inventory</h2>
      <div className="columns">
        {cards.map((card) => (
          <div key={card.id} className="column is-one-sixth">
            <button className="button" onClick={() => buyCard(card.id)}>
              <small>Buy ({inventory[card.id]} in stock)</small>
            </button>
            <Card imgUrl={card.imgUrl} content={card.content} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Store;