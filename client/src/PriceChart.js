import React, { Component } from 'react';
import { Bar, Line, Pie, Radar } from 'react-chartjs-2';

class PriceChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{
        maintainAspectRatio:false,
        labels: null,
        datasets: [
          {
            label: 'Left Eye CC',
            type:'line',
            // yAxisID: 'A',
            fill: false,
            data: null,
            backgroundColor: 'rgba(188, 169, 255, 0.7)',
            borderColor: 'rgba(188, 169, 255, 0.7)',
            borderWidth: 10
          },
          {
            label: 'Right Eye CC',
            type:'line',
            // yAxisID: 'A',
            fill: false,
            data: null,
            borderColor: 'rgba(231, 236, 163, 0.7)',
            borderWidth: 10
          },
          {
            label: 'Blood pressure x 10',
            type:'line',
            // yAxisID: 'A',
            fill: false,
            data: null,
            borderColor: 'rgba(137, 7, 180, 0.6)',
            borderWidth: 10
          },
          {
            label: 'Dose data -50',
            //yAxisID: 'B',
            data: null,
            backgroundColor: 'rgba(103, 161, 173, 0.9)',
            borderWidth: 0
          }
        ]
      }],
      readyToRender: false
    }
  }
  
  updateData() {
    let currentData = this.state.data.slice();
    // currentData[0].labels = this.props.update.timeScale;
    currentData[0].datasets[0].data = this.props.update.leftEye;
    currentData[0].datasets[1].data = this.props.update.rightEye;
    currentData[0].datasets[2].data = this.props.update.bloodPressure;
    currentData[0].datasets[3].data = this.props.update.dose;
    this.setState({
      data: currentData,
      readyToRender: true
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
          Wellness Progress
          <Line
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
                  }],
                  xAxes: [{
                    type: 'time',
                    distribution: 'linear'
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
