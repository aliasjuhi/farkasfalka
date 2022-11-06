import ScheduleSelector from 'react-schedule-selector'
import * as React from 'react';



class App extends React.Component {
  state = { schedule : [] }

  handleChange = newSchedule => {
    this.setState({ schedule: newSchedule })
  }
  
  renderCustomDateCell = (time, selected, innerRef) => (
    <div style={{ textAlign: 'center' }} ref={innerRef}>
      {selected ? '✅' : '❌'}
    </div>
  )

  render() {
    return (
      <ScheduleSelector
        selection={this.state.schedule}
        numDays={4}
        minTime={2}
        maxTime={3}
        title="Juhi"
        startDate={new Date('- Fri Nov 01 2022 20:00:06 GMT-0700 (PDT)')}
        dateFormat="ddd M/D"
        renderDateCell={this.renderCustomDateCell}
        onChange={this.handleChange}
      />
    )
  }
}
export default  App;