import React, { Component } from 'react';
import { Bar, Line, Pie, Radar } from 'react-chartjs-2';

class PriceChart extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  

  render() {
    console.log('props', this.props);
    return (
      <div className='chart'>
        Price Chart
        <Bar
          data={this.props.data}
          width={100}
          height={350}
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
    );
  }
}

export default PriceChart;
