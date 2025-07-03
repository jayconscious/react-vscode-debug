import React, { useState } from "react"
import { flushSync } from "react-dom"

const App = () => {
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)

    return (
        <div className="App">
            <button onClick={() => {
                // 第一次更新
                flushSync(() => {
                    setCount(count => count + 1)
                })
                // 第二次更新
                flushSync(() => {
                    setCount2(count2 => count2 + 1)
                })
            }}>点击</button>
            <span>count:{count}</span>
            <span>count2:{count2}</span>
        </div>
    )
}
export default App

