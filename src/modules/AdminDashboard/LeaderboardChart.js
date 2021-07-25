import * as React from "react";
import Paper from "@material-ui/core/Paper";
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
} from "@devexpress/dx-react-chart-material-ui";

import { Animation } from "@devexpress/dx-react-chart";
import { VictoryAxis, VictoryBar, VictoryChart, VictoryTheme } from "victory";

const data = [
  { year: "1950", population: 2.525 },
  { year: "1960", population: 3.018 },
  { year: "1970", population: 3.682 },
  { year: "1980", population: 11.44 },
  { year: "1990", population: 5.31 },
  { year: "2000", population: 6.127 },
  { year: "2010", population: 6.93 },
];

console.log(data);

function LeaderboardChart(leaderboard) {
  console.log(leaderboard);
  const chartData = [];
  leaderboard.leaderboard.map((i) => {
    chartData.push({ points: i.points, username: i.username });
  });

  const sampleData = [
    { quarter: 1, earnings: 13000 },
    { quarter: 2, earnings: 16500 },
    { quarter: 3, earnings: 14250 },
    { quarter: 4, earnings: 19000 },
  ];

  //  function compare( a, b ) {
  //   if ( a.rank < b.rank ){
  //     return -1;
  //   }
  //   if ( a.rank > b.rank ){
  //     return 1;
  //   }
  //   return 0;
  // }
  // chartData.sort(compare);
  console.log(chartData);
  const chartTheme = {
    axis: {
      style: {
        tickLabels: {
          // this changed the color of my numbers to white
         
          fill: 'white',
        },
      },
    },
  };
  if (chartData.length > 0) {
    return (
      <div>
        <Paper
          style={{
            color: "#fff",
            background:
              "linear-gradient(90deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.1) 100%)",
          }}
        >
          <Chart
            style={{ color: "white" }}
            data={chartData.reverse()}
            rotated={true}
            customizeLabel="white"
          >
            <ArgumentAxis />
            <ValueAxis max={10} />

            <BarSeries
              style={{ color: "#fff" }}
              color="#9fef00"
              valueField="points"
              argumentField="username"
            />
            <Title text="Top Users" />
            <Animation />
          </Chart>
        </Paper>

        {/* <VictoryChart   theme={chartTheme}>
          <VictoryAxis />
          <VictoryBar
          animate={{
            duration: 2000,
            onLoad: { duration: 1000 }
          }}
          padding={{ right: 20, bottom: 60 }}
            horizontal
            domain={{x: [0, 40000],}}
            data={chartData}
            style={{
              data: { fill: "#9fef00",fillOpacity: 0.7,},
              parent: {
                color: "#fff",
              },
              background: {
                fill: "pink"
              }
            }}
            x="points"
            // data accessor for y values
            y="username"
          />
        </VictoryChart> */}
      </div>
    );
  }
}
export default LeaderboardChart;
