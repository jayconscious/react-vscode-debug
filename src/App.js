import React, { createContext, useContext, useState, useCallback, useMemo } from "react";
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

// export default function App() {
//   const [num, add] = useState(0);
//   // return <p onClick={() => add(num + 1)}>{num}</p>;
//   return <div>
//     {/* <p><span onClick={() => {console.log('被点了呀')}}>111</span></p> */}
//     <p><span>111</span></p>
//     <div>
//       <span>222</span>
//     </div>
//   </div>
// }

export default function App() {
  // 得分榜
  const [list, setList] = useState([
    { name: 'kobe', score: '30' },
    { name: 'james', score: '40' },
    { name: 'wade', score: '20' },
  ])

  // 刷新
  const handleClick = useCallback(() => {
    list.forEach(item => {
      if (item.name === 'james') {
        item.score = '61'
      }
    })
    setList([...list])
  }, [list])

  const totalScore = useMemo(() => {
    return list.reduce((sum, item) => {
      return sum + Number(item.score)
    }, 0)
  }, [list])

  const renderList = list.map(item => {
    return <div key={item.name}>{item.name + ': ' + item.score}</div>
  })
  
  return (
    <div className='Index'>
      <div>得分榜：{totalScore}</div>
      <div className='itemBox'>{renderList}</div>
      <button onClick={handleClick}>Flash</button>
    </div>
  )
}