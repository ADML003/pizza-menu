import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

//* in strict mode, react will do some extra checks to make sure that the code is correct and RENDERS TWICE

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      {/* <h1>Hello react!</h1> */}
      <Header />

      <Menu />

      <Footer />
    </div>
  );
}

function Header() {
  //   const style = { color: "red", fontSize: "49px", textTransform: "uppercase" };
  return (
    <header className="header">
      <h1>fast react pizza co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  //const pizzas = [];

  const nums = pizzas.length;

  return (
    <main className="menu">
      <h2> Our Menu </h2>

      {nums > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>

          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We are still working on our menu. Please come back later :)</p>
      )}
      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10} // ! everything has to be in the {} except strings as this is jsx
      />

      <Pizza
        name="Pizza Fughi"
        ingredients="Tomato, mozarella, mushrooms, and onion"
        photoName="pizzas/funghi.jpg"
        price={15}
      ></Pizza> */}
    </main>
  );
}

//child pizza component
//* props is an object containing the information provided to it in the parent component

function Pizza({ pizzaObj }) {
  //console.log(props);
  return (
    //* beauty of jsx below
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt="Pizza Spinaci" />

      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>

        <span>{pizzaObj.soldOut ? "Sold Out" : pizzaObj.price + 3} </span>
        {/* use of span in general case scenarios when we want to apply a specific css style to a portion of a bigger block, or a paragraph */}
        {/* <p>
          This is a <span style={{ color: "red" }}>highlighted</span> word.
        </p> */}
      </div>
    </li>
  );
}
function Footer() {
  const hour = new Date().getHours();

  const openH = 9;
  const closeH = 24;

  const isOpen = hour >= openH && hour <= closeH;
  console.log(isOpen);
  //   if (hour >= openH && hour <= closeH) alert("we are currently open!");
  //   else alert("we are currently closed!");

  return (
    <footer className="footer">
      {/* <p>Hour right now {hour}</p> */}
      {isOpen ? (
        <Order closeH={closeH} openH={openH} />
      ) : (
        <p>
          We are happy to serve you between {openH}:00 and {closeH}:00.
        </p>
      )}
    </footer>
  );

  //* extracting a jsx component into two different components for better readability

  //! here we are using object destructuring to pass the props. NEVER FORGET TO SUE {} FOR OBJECT DESTRUCTURING OTHERWISE YOUR A$$ WILL BE ON THE LINE (FOR HOURS)

  function Order({ closeH, openH }) {
    return (
      <div className="order">
        <p>
          We are open from {openH}:00 to {closeH}:00.Come visit us or order
          online.
        </p>
        <button className="btn"> Order</button>
      </div>
    );
  }
}
// never nest the function inside the component!!

//rendering the app for the components
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
