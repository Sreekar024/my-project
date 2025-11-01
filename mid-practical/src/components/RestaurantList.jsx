import React, { useState } from "react";

const RestaurantList = () => {
  const [search, setSearch] = useState("");

  const restaurants = [
    { id: 1, name: "Spice Garden", cuisine: "Indian" },
    { id: 2, name: "Sushi World", cuisine: "Japanese" },
    { id: 3, name: "La Pasta", cuisine: "Italian" },
    { id: 4, name: "Taco Fiesta", cuisine: "Mexican" },
    { id: 5, name: "Dragon Palace", cuisine: "Chinese" },
    { id: 6, name: "Burger House", cuisine: "American" },
  ];

  const filteredRestaurants = restaurants.filter((r) =>
    r.cuisine.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app-container">
      <h1 className="title">🍴 Restaurant List</h1>

      
      <input
        type="text"
        placeholder="Search by cuisine..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />

      {/* Restaurant Cards */}
      <div className="restaurant-grid">
        {filteredRestaurants.length > 0 ? (
          filteredRestaurants.map((r) => (
            <div key={r.id} className="restaurant-card">
              <h2>{r.name}</h2>
              <p>Cuisine: {r.cuisine}</p>
            </div>
          ))
        ) : (
          <p className="no-results">No restaurants found.</p>
        )}
      </div>
    </div>
  );
};

export default RestaurantList;
