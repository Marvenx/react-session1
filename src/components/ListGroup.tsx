import React from "react";

const ListGroup = () => {
  let items:string[] = ["item1", "item2", "item3"];

  return (
    <>
      {items.length === 0 && <p>Loading</p>}
      <ul className="list-group">
        {items.map((item:string) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
