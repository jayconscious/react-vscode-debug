import React, { useState } from 'react'

export default function hookStateComponent() {
    const [hookState, setHookState] = useState(() => {
        debugger
        return 0
    })

    return (
        <>
            <div>
                count: {hookState}
            </div>
            <button onClick={() => {
                setHookState(preState => {
                    return preState + 1
                })
            }}>
                点我
            </button>
        </>
    )
}
