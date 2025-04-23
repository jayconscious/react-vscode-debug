import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import ParentAndChild from "./components/ParentAndChild";

export default function App() {
  const timer = useRef()
  let [seconds, setSeconds] = useState(4)
  const [disabled, setDisabled] = useState(true)
  let [isShow, setIsShow] = useState(true)

  const sendCode = () => {
    // debugger
    console.log('sendCode 111')
  }

  const onShowClick = () => {
    let newShowState = !isShow
    setIsShow(newShowState)
  }

  return (
    <>
      <button onClick={() => sendCode()}>hahaha</button>
      <br />
      <button onClick={() => onShowClick()}>{isShow ? '消失' : '展示'}</button>

      {isShow && <ParentAndChild />}
    </>
  )
}

