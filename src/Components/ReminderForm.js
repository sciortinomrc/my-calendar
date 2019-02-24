import React, {useState} from 'react';
import './style.css';
import {connect} from 'react-redux';
import {setSelectedDay, addReminder, deleteReminder} from '../State/actions.js';
const mapStateAsProps=state=>({
	id: state.setSelectedDay.selectedDay,
	editName: state.setSelectedDay.name,
	editTime: state.setSelectedDay.time,
	editColor: state.setSelectedDay.color,
	reminders: state.manageReminders.reminders
})

const mapDispatchAsProps=dispatch=>{
	return {
		setSelectedDay: (id)=>dispatch(setSelectedDay(id)),
		addReminder: (id, object)=>dispatch(addReminder(id, object)),
		deleteReminder: (id,object)=>dispatch(deleteReminder(id,object))
	}
}
const ReminderForm=(props)=>{
	const [fields, setFields]=useState({name:"", time:"", color:"#000"});
	if(props.editName.length && fields.name==="") setFields({name:props.editName, time:props.editTime, color:props.color});
	return(
		<div className="form-wrapper">
			<div className="form">
				<p>{props.id}</p>
				<input type="text" placeholder="Event name" maxLength="30" onChange={(e)=>setFields({...fields, name: e.target.value})} value={fields.name}/>
				<input type="time" step="900" title="Select time" onChange={(e)=>setFields({...fields, time: e.target.value})} value={fields.time}/>
				<input type="color" title="Select color" onChange={(e)=>setFields({...fields, color: e.target.value})} value={fields.color} />
				<i className="far fa-check-circle save" onClick={()=>{props.addReminder(props.id,fields); props.setSelectedDay("")}}></i><i className="far fa-times-circle discard"  onClick={()=>{props.deleteReminder(props.id,fields);props.setSelectedDay("")}}></i>
			</div>
		</div>
	)
}
export default connect(mapStateAsProps, mapDispatchAsProps)(ReminderForm);