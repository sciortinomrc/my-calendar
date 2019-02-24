import React, { Component } from 'react';
import './App.css';
import Month from './Components/Month.js'
import ReminderForm from './Components/ReminderForm.js';
import {connect} from 'react-redux';
const mapStateAsProps=state=>({
  id: state.setSelectedDay.selectedDay
})
class App extends Component {
  render() {
    return (
      <div className="App">
        <Month month="Jan" monthDays="31" />
        {(this.props.id)?<ReminderForm />:""}

      </div>
    );
  }
}

export default connect(mapStateAsProps)(App);
