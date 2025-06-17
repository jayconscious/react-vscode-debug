import { useState, memo } from "react";

// const A = memo(() => {
//     console.log('我是A组件')
//     return <div>
//         111
//     </div>
// })

const A = () => {
    console.log('我是A组件')
    return <div>
        111
    </div>
}


const B = (props: any) => {
    const [num, setNum] = useState<number>(0)
    return (<>
        <div>
            <div>值是 {num} </div>
            <button onClick={() => setNum((oldNum: number) => oldNum + 1)}>点我</button>
        </div>
        {props.children}
    </>)

}


export default function App() {

    return (
        <>
            <B>
                <A />
            </B>
        </>
    );
}







