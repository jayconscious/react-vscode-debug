// @ts-nocheck
import React, { useState, useLayoutEffect, useEffect, useRef } from 'react';

let textValueMap = Object.create(null)

const Answer: React.FC = () => {
    const [count, setCount] = useState(0);
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    let domRef = useRef<any>()
    let Timer = useRef()


    useEffect(() => {
        pageInit()

        return () => {
            clearInterval(Timer.current)
        }
    }, []);

    // @ts-ignore
    const pageInit = () => {
        if (!Timer.current) {
            Timer.current = setInterval(() => {
                let textDom = document.getElementById('textarea')
                if (textDom) {
                    console.log('textDom', textDom)
                    // @ts-ignore
                    const { value } = textDom
                    let timeStamp = +new Date()
                    if (!textValueMap[timeStamp]) {
                        textValueMap[timeStamp] = value
                    }
                    console.log('textValueMap', textValueMap)
                }
            }, 2000);
        }
    }

    const reset = () => {
        // @ts-ignore
        let latestKey = Object.keys(textValueMap).sort((a, b) => b - a).shift();
        // @ts-ignore
        let lasteVal = latestKey ? textValueMap[latestKey] : null;
        let textDom = document.getElementById('textarea')
        console.log('lasteVal', lasteVal)
        // debugger
        if (textDom) {
            // Todo: 设置 value
            // @ts-ignore
            textDom.value = lasteVal
        }

        // @ts-ignore
        delete textValueMap[latestKey]
    }


    return (
        <div style={{ padding: '20px' }}>
            <textarea ref={domRef} name="" id="textarea" cols={30} rows={10}>

            </textarea>
            <button type="button" onClick={() => reset()}>回退</button>
        </div>
    );
};

export default Answer; 