import React, { useState } from "react";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const testData = [
    { id: 1, name: "Yogurt", category: "Dairy" },
    { id: 2, name: "Pomegranate", category: "Produce" },
    { id: 3, name: "Lettuce", category: "Produce" },
    { id: 4, name: "String Cheese", category: "Dairy" },
    { id: 5, name: "Cookies", category: "Dessert" },
  ];

  const filteredItems = selectedCategory === "All"
    ? items
    : items.filter(item => item.category === selectedCategory);

  return (
    <div>
      <select onChange={(e) => setSelectedCategory(e.target.value)}
            value={selectedCategory}
        role="combobox"
      >
        <option value="All">All</option>
        <option value="Dairy">Dairy</option>
        <option value="Produce">Produce</option>
        <option value="Dessert">Dessert</option>
      </select>
      <div className="Items">
        {filteredItems.map((item) => (
          <div key={item.id} className="Item">
            {item.name} - {item.category}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShoppingList;
