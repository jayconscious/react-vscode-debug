import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import UseEffectUseLayoutEffect from "./components/useEffectUseLayoutEffect";
import ScrollList from "./components/ScrollList";
import UseCallbackDemo1 from "./components/UseCallbackDemo1";
import UseCallbackDemo2 from "./components/useCallbackDemo/use";
import Answer from './components/answer'
import RefDemo from './components/refDemo'



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
      {/* <button onClick={() => sendCode()}>hahaha</button>
      <br />
      

      
      {/* <ScrollList /> */}
      {/* <UseCallbackDemo1 /> */}
      {/* <UseCallbackDemo2 /> */}

      {/* <Answer /> */}

      {/* <button onClick={() => onShowClick()}>{isShow ? '消失' : '展示'}</button>
      {isShow && <UseEffectUseLayoutEffect />} */}
      <RefDemo />

    </>
  )
}

