import React from 'react';
import './style.css';
import Reminders from './Reminders.js';
import {connect} from 'react-redux';
import {setSelectedDay} from '../State/actions.js';
const mapStateAsProps=state=>({
	id: state.setSelectedDay.selectedDay,
	reminders: state.manageReminders.reminders
})
const mapDispatchAsProps=dispatch=>{
	return {
		setSelectedDay: (id)=>dispatch(setSelectedDay(id))
	}
}
const Day=(props)=>{
	return(
		<div id={props.month+" "+props.day} className="day">
			<Reminders parentId={props.month+" "+props.day}/>
			<div className="add-event" onClick={(e)=>props.setSelectedDay(e.target.parentNode.id)}>+</div>
			<p className="show-day">{props.day}</p>
		</div>
	)
}

export default connect(mapStateAsProps, mapDispatchAsProps)(Day);