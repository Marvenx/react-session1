import ListGroup from "./components/ListGroup";
function App() {
  let items1: string[] = ["data1", "data1", "data1"];
  let items2: string[] = ["data2", "data2", "data2"];
  const heading1 = "heading1";
  const heading2 = "heading2";
  const handleSelect = (item: string) => console.log(item);

  return (
    <>
      <ListGroup
        items={items1}
        heading={heading1}
        onSelect={handleSelect}
      ></ListGroup>
      <br />
      <ListGroup
        items={items2}
        heading={heading2}
        onSelect={handleSelect} //comment
      ></ListGroup>
    </>
  );
}
export default App;
