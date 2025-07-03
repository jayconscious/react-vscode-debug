import React, { useState } from 'react'

export default function hookState() {
    const [hookState, setHookState] = useState(0)

    return (
        <>
            <div>
                count: {hookState}
            </div>
            <button onClick={() => {

                setHookState(preState => {
                    debugger
                    return preState + 1
                })
            }}>
                点我
            </button>
        </>
    )
}
