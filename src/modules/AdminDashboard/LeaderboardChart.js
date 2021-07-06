import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';

import { Animation } from '@devexpress/dx-react-chart';

const data = [
  { year: '1950', population: 2.525 },
  { year: '1960', population: 3.018 },
  { year: '1970', population: 3.682 },
  { year: '1980', population: 11.440 },
  { year: '1990', population: 5.310 },
  { year: '2000', population: 6.127 },
  { year: '2010', population: 6.930 },
];

    console.log(data);


function LeaderboardChart(leaderboard) {
   console.log(leaderboard);
   const chartData = [];
   leaderboard.leaderboard.map((i) => {
     chartData.push({points: i.points, username: i.username})
   })


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
   if (chartData.length > 0) {

  
    return (
      
        <Paper style={{color: "#fff",background: "linear-gradient(90deg, rgba(38,49,67,1) 0%, rgba(59,85,50,1) 100%)"
            ,}}>
              
          <Chart
  
            style={{color: "white"}}
            data={chartData.reverse()}
            rotated={true}
          >
            <ArgumentAxis  />
            <ValueAxis max={10} />
  
            <BarSeries
            style={{color: "#fff",}}
            color="#9fef00"
              valueField="points"
              argumentField="username"
            />
            <Title text="Top Users" />
            <Animation />
          </Chart>
        </Paper>
      );
}
}
export default LeaderboardChart
