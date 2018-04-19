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
      dataset: [
        // {
        //   timeScale: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        //   leftEye: [null, null, null, null, 15.4, 16.5, 15.5, null, null, 17.2, null, null, 14.9, null, 15.4, null, 16.5, 15.5, 17.2, 14.9],
        //   rightEye: [null, null, null, null, 17.5, 17.5, 19.5, null, null, 16.2, null, null, 16.4, null, 17.5, null, 17.5, 19.5, 16.2, 16.4],
        //   bloodPressure: [null, null, null, null, 158/81 *10, 150/90 *10, 152/91 *10, null, null, 150/91 *10, null, null, 157/80 *10, null, 158/81 *10, null, 150/90 *10, 152/91 *10, 150/91 *10, 157/80 *10],
        //   dose: [null, null, null, null, 65 -50, 70  -50, 69  -50, null, null, 68  -50, null, null, 72  -50, null, 65 -50, null, 70  -50, 69  -50, 68  -50, 72  -50],
        // },
        // {
        //   timeScale: ['3/27', '3/28', '3/29', '3/30', '4/1', '3/27', '3/28', '3/29', '3/30', '4/1'],
        //   leftEye: [17.4, 18.5, 17.5, 19.2, 16.9, 17.4, 18.5, 17.5, 19.2, 16.9],
        //   rightEye: [17.5, 17.5, 19.5, 16.2, 16.4, 17.5, 17.5, 19.5, 16.2, 16.4],
        //   bloodPressure: [158/81 *10, 150/90 *10, 152/91 *10, 150/91 *10, 157/80 *10, 158/81 *10, 150/90 *10, 152/91 *10, 150/91 *10, 157/80 *10],
        //   dose: [65 -50, 70  -50, 69  -50, 68  -50, 72  -50, 65 -50, 70  -50, 69  -50, 68  -50, 72  -50],
        // },
        {
          date: 'April 16th 2018',
          times: ['4:30am', '6:00am', '6:30am', '8:30am', '12:00pm', '3:00pm', '7:30pm'],
          rightEye: [21.6, 18.9, 16, 10.6, 17.7, 6.5, 12.8],
          leftEye: [20.3, 19.9, 20, 24.3, 15, 15.6, 11.8],
          bloodPressure: [161/86, 142/80, 137/79, 138/79, 161/77, 149/86, 152/83],
          dose: [80, 80, 77, 71, 74, 75, 76],
        },
        {
          date: 'April 18th 2018',
          times: ['1:00am', '7:00am', '9:30am', '10:30am', '1:30pm', '2:30pm'],
          rightEye: [15.3, 21.8, 20.7, 21.7, 14.6, 12.2],
          leftEye: [17.2, 21.1, 20.3, 21.5, 14.2, 11.7],
          bloodPressure: [158/81, 159/92, 142/83, 141/87, 141/77, 129/72],
          dose: [72, 71, 73, 71, 66, 70],
        }
      ]
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
    // if (this.state.data) {
      return (
        <div>
          {this.state.dataset.map((day, index) => {
            return <PriceChart update={day} key={index}/>
          })}
        </div>
      );
    // } else {
    //   return (
    //     <div>...Loading</div>
    //   )
      
    // }
    
  }
}

render(<App/>, document.getElementById('app'));