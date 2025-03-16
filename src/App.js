import React, { useState, useRef, useEffect } from "react";
import "./App.css";

export default function App() {
  const timer = useRef()
  let [seconds, setSeconds] = useState(4)
  const [disabled, setDisabled] = useState(true)

  const sendCode = () => {
    debugger
    console.log('sendCode 111')
  }

  return (
    <>
      <button onClick={() => sendCode()}>hahaha</button>
    </>
  )
}