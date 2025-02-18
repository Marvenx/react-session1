import { useState } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;
  onSelect?: (item: string) => void;
}

const ListGroup = ({ items, heading, onSelect }: ListGroupProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>Loading</p>}
      <ul className="list-group">
        {items.map((item: string, index) => (
          <li
            key={index}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelect?(item)
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
