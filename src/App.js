import React, { createContext, useContext, useState } from "react";
import "./App.css";
// import DemoUseContext from './components/DemoUseContext';

// const header = React.createElement(
//   "header",
//   null,
//   React.createElement("h1", null, "Mozilla Developer Network"),
// );
// console.log('header', header.type())
// export default function App() {
//   const len = 3000;
//   return (
//     <ul>
//       {Array(len)
//         .fill(0)
//         .map((_, i) => (
//           <li>{i}</li>
//         ))}
//     </ul>
//   );
// }

export default function App() {
  const [num, add] = useState(0);
  return <p onClick={() => add(num + 1)}>{num}</p>;
}