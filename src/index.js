import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import reportWebVitals from "./reportWebVitals";
//JSX rules
// to make a function component you must start the function name with Caps.
// in a component function only return a single element
// element can be div , section, or fragment --> we will talk about fragment later
// use camelCase for html attribute
// APPLYING INLINE CSS
// <h1 style = { {color:"red", backgroud-color: "black"} }></h1> refer udermy React Tutorial and Projects Course (2022) section 3 JSX CSS

// function Greeting() {
//   return (
//     <div>
//       <div>
//         <h3>hii</h3>
//         <h3>
//           JSX rules, all theses are inside a parent div. you cannot return 2
//           different element unless they are parent and child.
//         </h3>
//       </div>
//     </div>
//     //  <div>
//     //  </div> // if you uncomment this (u will get error) you are returning 2 elements (div)
//   );
// }

// // ---------------------------------------------------------------
// // Nested Components
// function Parent() {
//   return (
//     <div>
//       <Child1></Child1>
//       <Child2></Child2>
//     </div>
//   );
// }
// function Child1() {
//   return <h5>Component Child 1 here </h5>;
// }
// function Child2() {
//   return <h5>Component Child 2 here </h5>;
// }

// -------------------------MINI PROJECT----------------------
var bookitems = [
  {
    author: "Basil",
    title: "Minnal Murali",
    img: "https://upload.wikimedia.org/wikipedia/en/b/bf/Minnal_Murali.jpg",
  },
  {
    author: "Amal neerad",
    title: "Bheeshma",
    img: "https://m.media-amazon.com/images/M/MV5BOTVmMDMwYWMtOGM1Ni00YmFiLTg4OGItMjEyYTQ3MDQ1MzVmXkEyXkFqcGdeQXVyMjkxNzQ1NDI@._V1_.jpg",
  },
  {
    author: "aavo",
    title: "JO & JO",
    img: "https://m.media-amazon.com/images/M/https://static.toiimg.com/photo/msid-91539918/91539918.jpg@._V1_.jpg",
  },
];



// continuation map()
function Booklist() {
  return (
    <section className="bookSection">
      {bookitems.map((book)=>{
        return <Book prop ={book}></Book>;
      })}
    </section>
  );
}

const Book = (prop) => {
  console.log(prop)
  return (
    // refer props destructuring udemy section 3
    <div className="book">
      <img src={prop.img} alt=""></img>
      <h6>{prop.title}</h6>
      <h6>{prop.author}</h6>
    </div>
  )
}

// ReactDOM.render(<Greeting></Greeting>, document.getElementById("root"));
// ReactDOM.render(<Parent></Parent>, document.getElementById("root"));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Booklist />
  </React.StrictMode>
);

