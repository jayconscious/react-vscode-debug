import { Line } from "@ant-design/charts";

export default function Children(props: any) {
   const { chartData, bindReady } = props;
   const config = {
      data: chartData,
      height: 400,
      xField: "year",
      yField: "value",
      point: {
         size: 5,
         shape: "diamond",
      },
      events: {
         // onPlotClick: bindReady,
         onPlotClick: (cfg: any) => {
            console.log(cfg);
          },
       },
       
   };

   return (
      <div style={{ width: 400, height: 400 }}>
         {/* <Line onReady={bindReady} {...config} /> */}
         <Line {...config} />
      </div>
   );
}
