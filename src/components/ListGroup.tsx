import { useState } from "react";

const ListGroup = () => {
  let items: string[] = ["item1", "item2", "item3"];
  const [selectedIndex,setSelectedIndex] = useState<number>(-1); // Hook
  return (
    <>
      {items.length === 0 && <p>Loading</p>}
      <ul className="list-group">
        {items.map((item: string, index) => (
          <li
            key={item}
            className={selectedIndex === index ? "list-group-item active" : "list-group-item"}
            onClick={() => {
              setSelectedIndex(index);
              console.log(selectedIndex);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
