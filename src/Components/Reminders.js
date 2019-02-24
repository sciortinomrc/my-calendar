import React from 'react';
import './style.css';
import {connect} from 'react-redux';
import {setSelectedDay} from '../State/actions.js';
const mapStateAsProps=state=>({
	reminders: state.manageReminders.reminders
})
const mapDispatchAsProps=dispatch=>{
	return{
		setSelectedDay: (id, reminder)=>dispatch(setSelectedDay(id,reminder))
	}
}
const Reminders=(props)=>{
	const remindersToSort=[];
	if(props.reminders[props.parentId])
		for(let reminder of props.reminders[props.parentId]){
			remindersToSort.push(reminder)
		}
	remindersToSort.sort((a,b)=>Date.parse("1970/01/01 "+a.time)-Date.parse("1970/01/01 "+b.time))
	const reminders=remindersToSort.map(reminder=>{return <p key={reminder.name+reminder.time} onClick={()=>{props.setSelectedDay(props.parentId,{name: reminder.name, time: reminder.time, color: reminder.color} )}} style={{color: reminder.color}} title={reminder.name+" "+reminder.time} >{reminder.name+" "+reminder.time}</p>},this)
	return(
		<React.Fragment>
			<div className="reminders" 
				onMouseOver={(e)=>{
					if(reminders.length>3 && e.target.classList.contains("reminders") 
						&& e.target.parentNode.children[1].classList.contains("extended"))	
						e.target.parentNode.children[1].style.display=(e.target.parentNode.children[1].style.display==="")?"flex":""
					}
				}
				>
				{reminders}

			</div>
			<p className="more">{(reminders.length>3)?"Hover to show more...":""}</p>
			<div className="extended" onMouseOut={(e)=>{
					if(!e.target.classList.contains("exteded") || !e.target.parentNode.classList.contains("extended"))
						e.target.style.display=""
				}}>
				{reminders}
			</div>
		</React.Fragment>
		)
}

export default connect(mapStateAsProps, mapDispatchAsProps)(Reminders);