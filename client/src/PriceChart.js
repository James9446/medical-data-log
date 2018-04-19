import React, { Component } from 'react';
import { Bar, Line, Pie, Radar } from 'react-chartjs-2';

class PriceChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{
        maintainAspectRatio:false,
        labels: ['12:00am', '12:30am', '1:00am', '1:30am', '2:00am', '2:30am', '3:00am', '3:30am', '4:00am', '4:30am', '5:00am', '5:30am', '6:00am', '6:30am', '7:00am', '7:30am', '8:00am', '8:30am', '9:00am', '9:30am', '10:00am', '10:30am', '11:00am', '11:30am', '12:00pm', '12:30pm', '1:00pm', '1:30pm', '2:00pm', '2:30pm', '3:00pm', '3:30pm', '4:00pm', '4:30pm', '5:00pm', '6:00pm', '6:30pm', '7:00pm', '7:30pm', '8:00pm', '8:30pm', '9:00pm', '9:30pm', '10:00pm', '10:30pm', '11:00pm', '11:30pm'],
        datasets: [
          {
            label: 'Left Eye CC',
            type:'line',
            // yAxisID: 'A',
            fill: false,
            data: null,
            // backgroundColor: 'rgba(188, 169, 255, 0.7)',
            borderColor: '#b9519e',
            borderWidth: 10
          },
          {
            label: 'Right Eye CC',
            type:'line',
            // yAxisID: 'A',
            fill: false,
            data: null,
            borderColor: '#f2ea3c',
            borderWidth: 10
          },
          {
            label: 'Blood pressure x 10',
            type:'line',
            // yAxisID: 'A',
            fill: false,
            data: null,
            borderColor: '#0001fe',
            borderWidth: 10
          },
          {
            label: 'Dose data -50',
            //yAxisID: 'B',
            data: null,
            backgroundColor: '#f58021',
            borderWidth: 0
          }
        ]
      }],
      readyToRender: false
    }
  }
  
  updateData() {
    let indicies = this.getIndicies(this.props.update.times)
    let currentData = this.state.data.slice();
    // currentData[0].labels = this.props.update.timeScale;
    currentData[0].datasets[0].data = this.extendDataArray(this.props.update.leftEye, indicies);
    currentData[0].datasets[1].data = this.extendDataArray(this.props.update.rightEye, indicies);
    currentData[0].datasets[2].data = this.extendDataArray(this.adjustBloodPressureData(this.props.update.bloodPressure), indicies);
    currentData[0].datasets[3].data = this.extendDataArray(this.adjustDoseData(this.props.update.dose), indicies);
    this.setState({
      data: currentData,
      readyToRender: true
    })
  }

  extendDataArray(array, indicies) {
    let updatedArray = [];
    let count = 0;
    for (let i = indicies[0]; i <= indicies[indicies.length -1]; i++) {
      if (i === indicies[count + 1]) {
        count++;
      }
      updatedArray[i] = array[count]
    }
    return updatedArray;
  }
  
  getIndicies(times) {
    let timeScale = ['12:00am', '12:30am', '1:00am', '1:30am', '2:00am', '2:30am', '3:00am', '3:30am', '4:00am', '4:30am', '5:00am', '5:30am', '6:00am', '6:30am', '7:00am', '7:30am', '8:00am', '8:30am', '9:00am', '9:30am', '10:00am', '10:30am', '11:00am', '11:30am', '12:00pm', '12:30pm', '1:00pm', '1:30pm', '2:00pm', '2:30pm', '3:00pm', '3:30pm', '4:00pm', '4:30pm', '5:00pm', '6:00pm', '6:30pm', '7:00pm', '7:30pm', '8:00pm', '8:30pm', '9:00pm', '9:30pm', '10:00pm', '10:30pm', '11:00pm', '11:30pm'];
    let indicies = [];
    for (let i = 0; i < times.length; i++) {
      indicies.push(timeScale.indexOf(times[i]));
    }
    return indicies;
  }

  adjustBloodPressureData(data) {
    return data.map((item) => {
      return item * 10;
    })
  }

  adjustDoseData(data) {
    return data.map((item) => {
      return item -50;
    })
  }

  componentWillMount() {
    this.updateData();
  }

  render() {
    console.log('props', this.props);
    if (this.state.readyToRender) {
      return (
        <div className='chart'>
          <h2>{this.props.update.date}</h2>
          <Bar
            data={this.state.data[0]}
            width={100}
            height={30}
            options={
              {
                scales: {
                  yAxes: [{
                  ticks: {
                      beginAtZero:true
                    }
                  }]
                }
              }
            }
          />
        </div>
      );
    } else {
      return (
        <div>...Loading</div>
      )
    }
  }
}

export default PriceChart;
