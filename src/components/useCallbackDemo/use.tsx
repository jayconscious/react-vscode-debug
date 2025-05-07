import { useState, useCallback } from "react";
import Children from "./children";

export default function App() {
    const [count, setCount] = useState(0);
    const [chartData, setChartData] = useState([
        { year: "1991", value: 3 },
        { year: "1992", value: 4 },
        { year: "1993", value: 3.5 },
        { year: "1994", value: 5 },
        { year: "1995", value: 4.9 },
        { year: "1996", value: 6 },
        { year: "1997", value: 7 },
        { year: "1998", value: 9 },
        { year: "1999", value: 13 },
    ]);

    const chartClick = useCallback((chart: any) => {
        if (chart) {
            console.log("图表的点击事件", chart);
            // chart.on("legend-item:click", (...args: any) => {
            //     console.log("图表的点击事件", args);
            // });
        }
    }, []);

    // const chartClick = (plot: any) => {
    //     if (plot && plot.chart) {
    //         plot.chart.on("legend-item:click", (...args: any) => {
    //             console.log("图表的点击事件", args);
    //         });
    //     }
    // };

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <div style={{ position: "fixed", top: 100, right: 100 }}>
            Count: {count}
            <br />
            <button onClick={handleClick}>count ++ </button>
            <Children chartData={chartData} bindReady={chartClick} />
        </div>
    );
}
