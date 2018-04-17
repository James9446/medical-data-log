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
      data: {chartData: {
        labels: ["Red", "Blue", "Yellow", "Green"],
        datasets: [{
            label: 'Left eye chart data',
            type:'line',
            data: [10, 30, 90, 50, 40],
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
            borderWidth: 1
        },
        {
          label: 'Right Eye chart data',
          data: [58, 70, 30, 60, 20],
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
          borderWidth: 1
        }
      ]
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
          borderWidth: 1
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