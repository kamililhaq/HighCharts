import React from 'react'
import { render } from 'react-dom'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'



const Dashboard = () => {

    const options = {
        title: {
          text: 'My chart'
        },
        series: [{
          data: [1, 2, 3]
        }]
      }


  return <div>
      Dashboard Page
      <br></br>
      <HighchartsReact
    highcharts={Highcharts}
    options={options}
  />

  </div>;
};

export default Dashboard;
