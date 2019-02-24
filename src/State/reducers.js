import {SET_SELECTED_DAY, ADD_REMINDER, DELETE_REMINDER} from './constants.js';

const initialDaySelection={};
export const setSelectedDay=(state=initialDaySelection, action={})=>{
	if(action.type===SET_SELECTED_DAY){
		return{
			selectedDay: action.payload.id,
			name: action.payload.reminder.name,
			time: action.payload.reminder.time,
			color: action.payload.reminder.color
		}
	}
	else  return state
}

const initialReminderList={reminders: {}};
export const manageReminders=(state=initialReminderList, action={})=>{
	switch(action.type){
		case ADD_REMINDER:{
			if(state.reminders && state.reminders[action.payload.id]){
				const dayReminders=state.reminders[action.payload.id];
				const foundReminder=dayReminders.filter(reminder=>reminder.name===action.payload.object.name)[0];
				if(foundReminder){
					const indexNeeded=dayReminders.indexOf(foundReminder);
					dayReminders[indexNeeded]=action.payload.object;
				}
				else dayReminders.push(action.payload.object)
				return{ reminders: {...state.reminders, [action.payload.id]: dayReminders}}
			}
			else if(state.reminders){
			return{reminders:{ ...state.reminders, [action.payload.id]: [action.payload.object]}}
			}
			else return state
		}
		case DELETE_REMINDER:{
			if(state.reminders && state.reminders[action.payload.id]){
				const dayReminders=state.reminders[action.payload.id];
				const foundReminder=dayReminders.filter(reminder=>reminder.name===action.payload.object.name)[0];
				if(foundReminder){
					const indexNeeded=dayReminders.indexOf(foundReminder);
					dayReminders.splice(indexNeeded,1);
				}
				return{ reminders: {...state.reminders, [action.payload.id]: dayReminders}}
			}
			else return state
		}

		default: return state;
	}
}