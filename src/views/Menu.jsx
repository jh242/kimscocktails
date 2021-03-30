import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

import menuData from '../assets/menu.json';

function DrinkCard({ item }) {
  const [flipped, setFlipped] = useState(false);
  const { name, desc } = item;
  const ingredients = desc.split(',');

  return (
    <div
      className="cardContainer"
      onClick={() => {
        setFlipped(!flipped);
      }}
    >
      <ReactCardFlip flipDirection="horizontal" isFlipped={flipped}>
        <div className="card">
          <h4>{item.name}</h4>
        </div>

        <div className="card">
          {ingredients.map((ingredient) => (
            <p>{ingredient}</p>
          ))}
        </div>
      </ReactCardFlip>
    </div>
  );
}

function Bundle({ bundle }) {
  const { name, items } = bundle;
  return (
    <div>
      <h3>{name}</h3>
      <div className="cards">
        {items.map((item) => (
          <DrinkCard item={item} />
        ))}
      </div>
      <div className="add">
        <span>{bundle.price}</span>
        <button>Add to order</button>
      </div>
    </div>
  );
}

export default function Menu() {
  const { bundles } = menuData;
  return (
    <div className="menu">
      <h1>Menu</h1>
      <h2>Bundles</h2>
      <hr />
      {Object.values(bundles).map((bundle) => (
        <Bundle bundle={bundle} />
      ))}
    </div>
  );
}
