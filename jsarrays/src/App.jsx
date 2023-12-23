import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Cart from "./components/Cart";
import Home from "./components/Home";
import MyStore from "./components/MyStore";
import merchandise from "./data";
import "./index.css";

function App() {
  const [people, setPeople] = useState(merchandise);
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, { ...item, quantity: 1 }]);
  };

  const updateQuantity = (index, quantity) => {
    setCart(
      cart.map((item, i) => (i === index ? { ...item, quantity } : item))
    );
  };

  const removeFromCart = (index) => {
    const newCart = cart.filter((item, i) => i !== index);
    setCart(newCart);
  };

  const addPeople = () => {
    const newPeople = [
      ...people,
      {
        name: "Susan Glasser",
        age: 27,
        id: 5,
        image: "https://randomUser.me/api/portraits/women/3.jpg",
        job: "Inventory Manager",
      },
      {
        name: "Kevin Powell",
        age: 29,
        id: 6,
        image: "https://randomUser.me/api/portraits/men/3.jpg",
        job: "Store Manager",
      },
    ];
    setPeople(newPeople);
  };

  const handleEdit = (id) => {
    const updatedPeople = people.map((person) => {
      if (person.id === id) {
        return {
          ...person,
          name: "Updated Name",
          age: 30,
          id: crypto.randomUUID(),
          image: "https://randomUser.me/api/portraits/men/4.jpg",
          job: "Updated Job",
        };
      }
      return person;
    });
    setPeople(updatedPeople);
  };

  const handleDelete = (id) => {
    const personToDelete = people.filter((person) => person.id !== id);
    setPeople(personToDelete);
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              people={people}
              addPeople={addPeople}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          }
        />
        <Route path="/store" element={<MyStore addToCart={addToCart} />} />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              removeFromCart={removeFromCart}
              updateQuantity={updateQuantity}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
