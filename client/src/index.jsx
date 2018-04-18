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
          timeScale: ['1524075437374', '1524075437374', '1524075437374'],
          leftEye: [17.4, 18.5, 17.5],
          rightEye: [17.5, 17.5, 19.5],
          bloodPressure: [158/81 *10, 150/90 *10, 152/91 *10],
          dose: [65 -50, 70  -50, 69  -50],
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