import { createContext, useContext, useState } from "react";
import "./App.css";
import DemoUseContext from './components/DemoUseContext';



export default function MyApp() {
  const [theme, setTheme] = useState("dark");
  return (
    <DemoUseContext></DemoUseContext>
  )
   
}

