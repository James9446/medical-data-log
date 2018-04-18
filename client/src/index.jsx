import React from 'react';
import {render} from 'react-dom';
import StatefulComponent from './components/StatefulComponent.jsx';
import StatelessComponent from './components/StatelessComponent.jsx';
import style from './main.css';
import $ from "jquery";
import PriceChart from './PriceChart';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        chartData: {
          maintainAspectRatio:false,
          labels: ["Red", "Blue", "Yellow", "Green"],
          datasets: [
            {
              label: 'Left eye chart data',
              type:'line',
              // yAxisID: 'A',
              fill: false,
              data: [17.4, 18.5, 17.5, 19.2, 16.9],
              backgroundColor: 'rgba(188, 169, 255, 0.7)',
              // backgroundColor: [
              //     'rgba(255, 99, 132, 0.2)',
              //     'rgba(54, 162, 235, 0.2)',
              //     'rgba(255, 206, 86, 0.2)',
              //     'rgba(75, 192, 192, 0.2)',
              //     'rgba(153, 102, 255, 0.2)',
              //     'rgba(255, 159, 64, 0.2)'
              // ],
              borderColor: 'rgba(188, 169, 255, 0.7)',
              // borderColor: 
              // [
              //     'rgba(255,99,132,1)',
              //     'rgba(54, 162, 235, 1)',
              //     'rgba(255, 206, 86, 1)',
              //     'rgba(75, 192, 192, 1)',
              //     'rgba(153, 102, 255, 1)',
              //     'rgba(255, 159, 64, 1)'
              // ],
              borderWidth: 10
          },
          {
            label: 'Right Eye chart data',
            type:'line',
            // yAxisID: 'A',
            fill: false,
            data: [17.5, 17.5, 19.5, 16.2, 16.4],
            // backgroundColor: 'rgba(231, 236, 163, 0.9)',
            //     'rgba(255, 99, 132, 0.2)',
            //     'rgba(54, 162, 235, 0.2)',
            //     'rgba(255, 206, 86, 0.2)',
            //     'rgba(75, 192, 192, 0.2)',
            //     'rgba(153, 102, 255, 0.2)',
            //     'rgba(255, 159, 64, 0.2)'
            // ],
            borderColor: 'rgba(231, 236, 163, 0.7)',
            // [
            //     'rgba(255,99,132,1)',
            //     'rgba(54, 162, 235, 1)',
            //     'rgba(255, 206, 86, 1)',
            //     'rgba(75, 192, 192, 1)',
            //     'rgba(153, 102, 255, 1)',
            //     'rgba(255, 159, 64, 1)'
            // ],
            borderWidth: 10
          },
          {
            label: 'Blood pressure chart data',
            type:'line',
            // yAxisID: 'A',
            fill: false,
            data: [158/81 *10, 150/90 *10, 152/91 *10, 150/91 *10, 157/80 *10],
            // backgroundColor: 'rgba(243, 134, 48, 0.8)',
            // [
            //     'rgba(255, 99, 132, 0.2)',
            //     'rgba(54, 162, 235, 0.2)',
            //     'rgba(255, 206, 86, 0.2)',
            //     'rgba(75, 192, 192, 0.2)',
            //     'rgba(153, 102, 255, 0.2)',
            //     'rgba(255, 159, 64, 0.2)'
            // ],
            borderColor: 'rgba(137, 7, 180, 0.6)',
            // [
            //     'rgba(255,99,132,1)',
            //     'rgba(54, 162, 235, 1)',
            //     'rgba(255, 206, 86, 1)',
            //     'rgba(75, 192, 192, 1)',
            //     'rgba(153, 102, 255, 1)',
            //     'rgba(255, 159, 64, 1)'
            // ],
            borderWidth: 10
          },
          {
            label: 'Dose chart data',
            // yAxisID: 'B',
            // fillColor: 'rgba(157, 255, 154, 1)',
            // strokeColor: 'rgba(157, 255, 154, 1)',
            data: [65 -50, 70  -50, 69  -50, 68  -50, 72  -50],
            backgroundColor: 'rgba(103, 161, 173, 0.9)',
            //[
            //     'rgba(157, 255, 154, 1)'
            // ],
            // borderColor: [
            //     'rgba(255,99,132,1)',
            //     'rgba(54, 162, 235, 1)',
            //     'rgba(255, 206, 86, 1)',
            //     'rgba(75, 192, 192, 1)',
            //     'rgba(153, 102, 255, 1)',
            //     'rgba(255, 159, 64, 1)'
            // ],
            borderWidth: 0
          }
        ]
      },
      options: {
        scales: {
          yAxes: [{
            yAxisID: 'A',
            // type: 'linear',
            position: 'left',
          }, {
            yAxisID: 'B',
            type: 'linear',
            position: 'right',
            ticks: {
              max: 1,
              min: 0
            }
          }]
        }
        }
      }
    };
  }

  // getPrice() {
  //   $.ajax({
  //     type: "GET",
  //     url: '/data',
  //     // data: JSON.stringify({ data: groceryItem }),
  //     contentType: 'application/json',
  //     success: (data) => {
  //       console.log('get request was successful')
  //       // console.log(data)
  //       // this.setState({
  //       //   data: this.createDatasets(data)
  //       // })
  //     },
  //     error: (error) => {
  //       console.error('There was an error with the POST request', error);
  //     }
  //   })
  // }
  
  createDatasets(obj) {
    let data = {
      days: [],
      eyeData: []
    };
    for (let key in obj) {
      data.days.push(key);
      data.eyeData.push(obj[key]);
    }
    return this.updateData(data);
  }

  updateData(eyeData) {
    let data = {chartData: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [{
          label: 'Ethereum (ETH) price',
          data: [],
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 10
      }]
  },
  options: {
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero:true
              }
          }]
      }
  }}
    data.labels = eyeData.days;
    data.datasets[0].data = eyeData.eyeData;
    return data;
  }

  // componentWillMount(){
  //   this.getPrice();
  // }
  render() {
    console.log('App state',this.state);
    if (this.state.data) {
      return (
        <PriceChart data={this.state.data.chartData} />
      );
    } else {
      return (
        <div>...Loading</div>
      )
      
    }
    
  }
}

render(<App/>, document.getElementById('app'));