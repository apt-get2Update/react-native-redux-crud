	import {FETCHING_PEOPLE_FAIL,FETCHING_PEOPLE_SUCESS,FETCHING_PEOPLE} from '../constants';


	const initialState={
		peoples:[],
		isFetching:false,
		error:false
	}

	export default function peopleReducer(state=initialState,action){
		switch(action.type){
			case FETCHING_PEOPLE:
				return {...state,isFetching:true,peoples:[]};
			case FETCHING_PEOPLE_SUCESS:
				return {...state,isFetching:false,peoples:action.data};
			case FETCHING_PEOPLE_FAIL:
				return {...state,isFetching:false,error:true};
			default:
				return state;
		}
	}