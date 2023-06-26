import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [items, setItem] = useState([]);

  function addItem(data) {
    setItem((prevValue) => {
      return [...prevValue, data];
    });
  }
  function deleteItem(id) {
    setItem((prevValue) => {
      return items.filter((item, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addItem} />
      {items.map((item, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={item.title}
            content={item.content}
            onDelete={deleteItem}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
