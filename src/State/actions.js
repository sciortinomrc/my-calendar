import {SET_SELECTED_DAY, ADD_REMINDER, DELETE_REMINDER} from './constants.js';

export const setSelectedDay=(id,reminder={name:"", color:"", time:""})=>{
	return {
		type: SET_SELECTED_DAY,
		payload: {id, reminder}
	}
}
export const addReminder=(id,object)=>dispatch=>{
	dispatch({
		type: ADD_REMINDER,
		payload: {id, object}
	})
}
export const deleteReminder=(id,object)=>dispatch=>{
	dispatch({
		type: DELETE_REMINDER,
		payload: {id, object}
	})
}