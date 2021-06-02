import ReactDOM from 'react-dom'
import React from "react";
import ItemsList from "./components/ItemsList";

const propsValues = {
  title: "Список смартфонов",
  items: [
    "Samsung Galaxy Note20",
    "Apple iPhone 12 Pro",
    "Google Pixel 5",
    "Huawei P40 Pro",
    "OnePlus 8 Pro",
    "Asus Zenfone 7 Pro"
  ]
};

ReactDOM.render(<ItemsList data={propsValues} />, document.getElementById('app'));
