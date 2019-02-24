import React from 'react';
import './style.css';
import Day from './Day.js';
const days=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];

const monthViewFunction=(month,monthDays)=>{
		const monthView=[];
		for(let i=0; i<monthDays; i++){
			monthView.push(<Day key={month+i} month={month} day={(i+1)} />);
		}
		return monthView;
}
const Month=(props)=>{
	return(
		<div id={props.month} className="month">
			{
				days.map(day=>{return <div key={day} className="literal">{day}</div>})
			}
			{	
				monthViewFunction(props.month, props.monthDays)
			}
		</div>
	)
}
export default Month;