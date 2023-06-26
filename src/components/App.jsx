import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  // const items = {
  //   title: "",
  //   desc: ""
  // };
  const [items, setItem] = useState([{ title: "", desc: "" }]);

  function addItem(data) {
    setItem((prevValue) => {
      return [...prevValue, data];
    });
  }
  return (
    <div>
      <h1>IamgFod</h1>
      <Header />
      <CreateArea onAdd={addItem} />
      <Note key={1} title="Note title" content="Note content" />
      <Footer />
    </div>
  );
}

export default App;
